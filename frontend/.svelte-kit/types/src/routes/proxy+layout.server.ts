// @ts-nocheck
import { readSingleton } from '@directus/sdk';
import { getDirectusClient } from '$lib';
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = async ({ fetch }: Parameters<LayoutServerLoad>[0]) => {
	const client = getDirectusClient(fetch);
	const globals = await client.request(readSingleton('globals'));

	if (typeof globals === 'undefined') {
		error(404);
	}

	return {
		globals
	};
};
