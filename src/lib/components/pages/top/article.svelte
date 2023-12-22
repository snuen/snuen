<script lang="ts">
	import Heading from '$lib/components/atoms/heading.svelte';

	// @ts-expect-error import markdown file
	import AboutMeJaContent from '$lib/contents/pages/top/about-me-ja.md';
	// @ts-expect-error import markdown file
	import TechPreferenceJaContent from '$lib/contents/pages/top/tech-preference-ja.md';
	// @ts-expect-error import markdown file
	import UsesJaContent from '$lib/contents/pages/top/uses-ja.md';
</script>

<article>
	<section class="mb-8">
		<Heading level={2}>About me</Heading>
		<AboutMeJaContent />
	</section>
	<section class="mb-8">
		<Heading level={2}>Tech preference</Heading>
		<TechPreferenceJaContent />
	</section>
	<section class="mb-8">
		<Heading level={2}>Uses</Heading>
		<UsesJaContent />
	</section>
</article>
