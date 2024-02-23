<script lang="ts">
	import { cn } from '$lib/utils/tw-helper';
	import CheckCircle from '$lib/components/svgs/check-circle.svelte';
	import Icon from '$lib/components/atoms/icon.svelte';

	export let index: number;
	export let type: 'start' | 'end' | 'middle';
	export let time: string;
	export let title: string;
	export let description: string;
</script>

{#if type === 'end' || type === 'middle'}
	<hr />
{/if}
<div class="timeline-middle">
	<Icon className="inline-block w-6 h-6 ml-1">
		<CheckCircle />
	</Icon>
</div>
<div class={cn('mb-10', index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end')}>
	<time class="font-mono italic">{time}</time>
	<p class="text-lg font-semibold">{title}</p>
	<p>{description}</p>
</div>
{#if type === 'start' || type === 'middle'}
	<hr />
{/if}
