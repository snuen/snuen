<script lang="ts">
	import CheckCircle from '$lib/components/svgs/check-circle.svelte';
	import Icon from '$lib/components/atoms/icon.svelte';

	import type { TimeItemProps } from './type';

	export let index: TimeItemProps['index'];
	export let type: TimeItemProps['type'];
	export let time: TimeItemProps['time'];
	export let title: TimeItemProps['title'];
	export let description: TimeItemProps['description'];
</script>

{#if type === 'end' || type === 'middle'}
	<hr />
{/if}
<div class="timeline-middle">
	<Icon className="inline-block w-6 h-6 ml-1">
		<CheckCircle />
	</Icon>
</div>
<div class={'mb-10' + ' ' + (index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end')}>
	<time class="font-mono italic">{time}</time>
	<p class="text-lg font-semibold">{title}</p>
	<p>{description}</p>
</div>
{#if type === 'start' || type === 'middle'}
	<hr />
{/if}
