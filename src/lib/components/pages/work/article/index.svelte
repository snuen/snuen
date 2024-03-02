<script lang="ts">
	import Heading from '$lib/components/ui/heading.svelte';
	import contentJa from '$lib/contents/pages/work/content-ja.json';

	import TimeItem from './timeline-item.svelte';

	const content = contentJa;
</script>

<article>
	<Heading level={2}>Work</Heading>
	<ul
		class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-8"
	>
		{#each content as { time, title, description }, index (time)}
			<li>
				<TimeItem
					{index}
					type={index === 0
						? 'start'
						: index === content.length - 1
							? 'end'
							: 'middle'}
					{time}
					{title}
					{description}
				/>
			</li>
		{/each}
	</ul>
</article>
