// @ts-nocheck
import { readItems } from '@directus/sdk';
import { getDirectusClient } from '$lib';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = async ({ fetch, params }: Parameters<PageServerLoad>[0]) => {
	const client = getDirectusClient(fetch);
	const [post] = await client.request(
		readItems('posts', {
			filter: {
				slug: { _eq: `${params.slug}` },
				status: { _eq: 'published' },
				published_at: { _lte: new Date().toISOString() }
			}
		})
	);

	if (typeof post === 'undefined') {
		error(404);
	}

	return {
		post
	};
};
