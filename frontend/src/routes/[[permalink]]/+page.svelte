<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import { page } from '$app/state';
</script>

<SvelteSeo
	title={page.data.page.seo.title}
	description={page.data.page.seo.meta_description}
	canonical={`${page.data.globals.url}${page.url.pathname}`}
	nofollow={page.data.page.seo.no_follow || false}
	noindex={page.data.page.seo.no_index || false}
	themeColor={page.data.globals.accent_color}
	openGraph={{
		title: page.data.page.seo.title,
		description: page.data.page.seo.meta_description,
		url: `${page.data.globals.url}${page.url.pathname}`,
		type: 'website',
		site_name: page.data.page.seo.title,
		images: [
			{
				url: `${page.data.globals.url}/assets/8ccd8d83-4c61-404a-ae80-e140b24d94a8`,
				width: '',
				height: '',
				alt: ''
			}
		]
	}}
	twitter={{
		card: 'summary_large_image',
		site: `@${page.data.globals.title}`,
		title: page.data.page.seo.title,
		description: page.data.page.seo.meta_description
	}}
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'NewsMediaOrganization',
		name: page.data.globals.title,
		url: page.data.globals.url
	}}
/>
