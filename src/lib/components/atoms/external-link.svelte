<script lang="ts">
	import ArrowTopRightOnSquare from '$lib/components/svgs/arrow-top-right-on-square.svelte';
	import Icon from '$lib/components/atoms/icon.svelte';

	export let href: string;
	export let text: string;
</script>

<a {href} target="_blank" rel="noopener noreferrer" class="link inline-flex items-center"
	>{text}
	<Icon width="1rem" height="1rem" className="inline-block ml-1">
		<ArrowTopRightOnSquare />
	</Icon>
</a>
