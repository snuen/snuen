<script lang="ts">
	import ExternalLink from '$lib/components/atoms/external-link.svelte';
	import Heading from '$lib/components/atoms/heading.svelte';
</script>

<div class="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 mb-6 md:mb-8">
	<figure class="overflow-hidden">
		<img src="/avatar.jpg" alt="avatar" width="250" height="250" />
	</figure>
	<div class="min-w-fit">
		<Heading level={1}>パク ソンジュン</Heading>
		<ul class="mt-3">
			<li>🧑🏻‍💻 フロントエンドエンジニア</li>
			<li>🐴 群馬と東京の二拠点生活</li>
		</ul>
		<dl class="mt-3">
			<dt class="mb-1">External links:</dt>
			<dd class="flex gap-4">
				<ExternalLink href="https://github.com/sjgently" text="GitHub" />
				<ExternalLink href="https://zenn.dev/sjgently" text="Zenn" />
			</dd>
		</dl>
	</div>
</div>

<style>
	figure {
		min-width: 250px;
		min-height: 250px;
	}
</style>
