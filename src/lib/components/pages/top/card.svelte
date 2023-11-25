<script lang="ts">
	import ExternalLink from '../../atoms/external-link.svelte';
</script>

<div class="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 mb-6 md:mb-8">
	<figure class="overflow-hidden">
		<img src="/avatar.jpg" alt="avatar" width="250" height="250" />
	</figure>
	<div class="min-w-fit">
		<h1 class="mb-3 text-3xl font-bold">パク ソンジュン</h1>
		<dl class="mb-3">
			<dt class="mb-1">Social links:</dt>
			<dd class="flex gap-4">
				<ExternalLink href="https://github.com/sjgently" text="GitHub" />
				<ExternalLink href="https://qiita.com/" text="Tech Blog" />
			</dd>
		</dl>
		<ul>
			<li>在宅8割・コワーキング2割</li>
			<li>OTAのSaaSプロダクトの開発中</li>
			<li>意義のあるUI/UXを構築することが好き</li>
		</ul>
	</div>
</div>

<style>
	figure {
		min-width: 250px;
		min-height: 250px;
	}
</style>
