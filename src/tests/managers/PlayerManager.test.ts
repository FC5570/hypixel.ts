import { test } from '../test';
import { Player } from '../../lib/classes/Player';
import { expect, expectTypeOf } from 'vitest';

test('PlayerManager.get (with username) returns Player class', async ({ client }) => {
	const player = await client.players.fetch(process.env.VITE_TESTING_USERNAME);
	expect(player).toBeInstanceOf(Player);
});

test('PlayerManager.get (with uuid) returns Player class', async ({ client }) => {
	const player = await client.players.fetch(process.env.VITE_TESTING_USER_UUID);
	expect(player).toBeInstanceOf(Player);
});

test('PlayerManager.getRecentlyPlayedGames returns recently played games', async ({ client }) => {
	const games = await client.players.getRecentlyPlayedGames(process.env.VITE_TESTING_USER_UUID);
	expectTypeOf(games).toBeArray();
});

test('PlayerManager.getStatus returns current online status', async ({ client }) => {
	const status = await client.players.getStatus(process.env.VITE_TESTING_USER_UUID);
	expectTypeOf(status).toBeObject();
});
