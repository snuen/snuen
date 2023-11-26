<script lang="ts">
	export let width: string;
	export let height: string;
	export let className = '';
</script>

<span class={className} data-icon-width={width} data-icon-height={height}>
	<slot />
</span>

<style>
	span > * {
		width: attr(data-icon-width inherit);
		height: attr(data-icon-height inherit);
	}
</style>
