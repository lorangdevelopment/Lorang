<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	let { children } = $props();
</script>

{@render children()}

<svelte:head>
	<link
		rel="icon"
		type="image/png"
		href={`${page.data.globals.directus_url}/assets/58bd01d1-7e0f-4597-9d21-9a72ce1e0127`}
		sizes="96x96"
	/>
	<link
		rel="icon"
		type="image/svg+xml"
		href={`${page.data.globals.directus_url}/assets/0410cec5-3b6c-49d2-8994-1580ef8b2cf0`}
	/>
	<link
		rel="shortcut icon"
		href={`${page.data.globals.directus_url}/assets/ffaa6edf-e04f-4c9d-b802-19006e5d0f66`}
	/>
	<link
		rel="apple-touch-icon"
		sizes="180x180"
		href={`${page.data.globals.directus_url}/assets/46e18808-ef70-4990-abf8-b3b54a5c37ab`}
	/>
</svelte:head>
