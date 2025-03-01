<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import { page } from '$app/state';
</script>

<SvelteSeo
	title={page.data.post.seo.title}
	description={page.data.post.seo.meta_description}
	canonical={`${page.data.globals.url}${page.url.pathname}`}
	nofollow={page.data.post.seo.no_follow || false}
	noindex={page.data.post.seo.no_index || false}
	themeColor={page.data.globals.accent_color}
	twitter={{
		card: 'summary_large_image',
		site: `@${page.data.globals.title}`,
		title: page.data.post.seo.title,
		description: page.data.post.seo.meta_description
	}}
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: page.data.post.title,
		author: {
			'@type': 'Person',
			name: page.data.post.author
		},
		datePublished: page.data.post.published_at,
		description: page.data.post.description,
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `${page.data.globals.url}${page.url.pathname}`,
		}
	}}
/>
