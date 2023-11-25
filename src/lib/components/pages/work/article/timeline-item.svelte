<script lang="ts">
	import checkCircle from '$lib/assets/check-circle.svg';

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
	<img src={checkCircle} alt="check circle" class="h-5 w-5" />
</div>
<div class={'mb-10' + ' ' + (index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end')}>
	<time class="font-mono italic">{time}</time>
	<p class="text-lg font-semibold">{title}</p>
	<p>{description}</p>
</div>
{#if type === 'start' || type === 'middle'}
	<hr />
{/if}
