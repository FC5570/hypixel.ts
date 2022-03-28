import { Client } from '../../src';
import { test, expect } from 'vitest';

const client = new Client(process.env.HYPIXEL_API_KEY!);

test('Util.getUUID to be correct UUID', async () => {
	const status = await client.players.getUUID('armc');
	expect(status).toBe('ab589c4ed6804cd1b5ff3259980fb633');
});

test('Util.isUUID matches UUID Regex', () => {
	const uuid = 'ab589c4ed6804cd1b5ff3259980fb633';
	const regex = /^[0-9a-f]{32}$/i;
	expect(uuid).toMatch(regex);
});

test('Util.getUsername to be the correct Username', async () => {
	const username = await client.util.getUsername('5de3d1d5-1a95-4fb3-a2b7-88e4938ae11c');

	expect(username).toBe('Thorin');
});
