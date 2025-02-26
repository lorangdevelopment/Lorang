// @ts-nocheck
import { readItems } from '@directus/sdk';
import { getDirectusClient } from '$lib';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = async ({ fetch, params }: Parameters<PageServerLoad>[0]) => {
	const client = getDirectusClient(fetch);
	const [page] = await client.request(
		readItems('pages', {
			filter: {
				permalink: { _eq: params.permalink ? `/${params.permalink}` : '/' },
				status: { _eq: 'published' },
				page_type: { _eq: 'page' },
				published_at: { _lte: new Date().toISOString() }
			}
		})
	);

	if (typeof page === 'undefined') {
		error(404);
	}

	return {
		page
	};
};
