import { BaseManager } from './BaseManager';
import { Client } from '../Client';
import { Player, Util } from '../classes/index';
import { HypixelTSError } from '../errors/index';
import type { APIPlayer, GetRecentlyPlayedGamesResponse, GetStatusResponse } from '../typings';

/**
 * Player related endpoints.
 * @category Managers
 * @group Managers
 */
export class PlayerManager extends BaseManager {
	public constructor(client: Client) {
		super(client, true);
	}

	/**
	 * Fetch a player using their username or uuid
	 * @param identifier The username/uuid of the player
	 */
	public async fetch(identifier: string) {
		if (!identifier) throw new HypixelTSError('METHOD_MISSING_OPTION', 'PlayerManager', 'fetch', 'identifier');

		const uuid = await this.getUUID(identifier);
		const { player } = await this.makeGetRequest<{ player: APIPlayer }>(`/player?uuid=${uuid}`);
		return new Player(this.client, player);
	}

	/**
	 * Fetch the recently played games of a player
	 * @param identifier The username/uuid of the player
	 */
	public async getRecentlyPlayedGames(identifier: string) {
		if (!identifier) throw new HypixelTSError('METHOD_MISSING_OPTION', 'PlayerManager', 'getRecentlyPlayedGames', 'identifier');

		const uuid = await this.getUUID(identifier);
		const { games } = await this.makeGetRequest<{ games: GetRecentlyPlayedGamesResponse[] }>(`/recentgames?uuid=${uuid}`);
		return games;
	}

	/**
	 * Fetch the status of a player
	 * @param identifier The username/uuid of the player
	 */
	public async getStatus(identifier: string) {
		if (!identifier) throw new HypixelTSError('METHOD_MISSING_OPTION', 'PlayerManager', 'getStatus', 'identifier');

		const uuid = await this.getUUID(identifier);
		const { session } = await this.makeGetRequest<{ session: GetStatusResponse }>(`/status?uuid=${uuid}`);
		return session;
	}

	/**
	 * Resolves the username to a uuid for use in requests
	 * @param identifier The username (or uuid) of the player
	 */
	private async getUUID(identifier: string) {
		const isUUID = Util.isUUID(identifier);

		if (!isUUID) {
			const uuid = await Util.getUUID(identifier);
			return uuid;
		}

		return identifier;
	}
}
