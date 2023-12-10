<script lang="ts">
	import ArrowTopRightOnSquare from '$lib/components/svgs/arrow-top-right-on-square.svelte';
	import Icon from '$lib/components/atoms/icon.svelte';

	export let href: string;
	export let text: string;
</script>

<a {href} target="_blank" rel="noopener noreferrer" class="link inline-flex items-center"
	>{text}
	<Icon className="inline-block w-4 h-4 ml-1">
		<ArrowTopRightOnSquare />
	</Icon>
</a>
