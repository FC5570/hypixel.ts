import { BaseClass } from './Base';
import petitio from 'petitio';
import { HypixelJSError } from '../errors';
import type { Client } from '../lib';
import type { GetUUIDResponse } from '../typings';

/**
 * Represents a Util class used for util methods.
 */
export class Util extends BaseClass {
	public constructor(client: Client) {
		super(client);
	}

	/**
	 * Get the UUID of a player by providing their name.
	 * @param {string} name: The name of the player
	 * @returns {Promise<string>}
	 */
	public async getUUID(name: string) {
		try {
			const data = await petitio(`https://api.mojang.com/users/profiles/minecraft/${name}`).send();
			const json = (await data.json()) as GetUUIDResponse;

			if (json.error) throw new HypixelJSError('GET_UUID_ERROR', json.error, data.statusCode);

			return json.id;
		} catch {
			throw new HypixelJSError('GET_UUID_404');
		}
	}

	/**
	 * Check whether the provided UUID is a valid UUID or not.
	 * @param {string} uuid: The UUID to check
	 * @returns {boolean}
	 */
	public isUUID(uuid: string) {
		const regex = /^[0-9a-f]{32}$/i;
		return regex.test(uuid);
	}
}
