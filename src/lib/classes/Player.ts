import { Base } from './Base';
import { Client } from '../Client';
import { APIPlayer } from '../typings';

export interface Player extends APIPlayer {}
/**
 * The player class
 * @category Classes
 * @group Classes
 * @see {@link https://api.hypixel.net/#tag/Player-Data/paths/~1player/get}
 */
export class Player extends Base {
	/**
	 * @param client Instantiated (and started) hypixel.ts client
	 * @param data Player data received from API
	 */
	public constructor(client: Client, data: APIPlayer) {
		super(client);
		Object.assign(this, data);
	}

	/**
	 * Fetch the SkyBlock profiles of this player
	 * @see {@link SkyBlockManager.fetchPlayerSkyBlockProfiles}
	 */
	public async fetchSkyBlockProfiles() {
		return this.client.skyblock.fetchPlayerSkyBlockProfiles(this.uuid);
	}
}
