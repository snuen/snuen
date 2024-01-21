<script lang="ts">
	import { fade } from 'svelte/transition';

	let isShow = false;

	let windowWidth = window.innerWidth;
	let windowHeight = window.innerHeight;

	window.addEventListener('resize', () => {
		isShow = true;

		let newWidth = window.innerWidth;
		let newHeight = window.innerHeight;

		if (newWidth !== windowWidth) {
			windowWidth = newWidth;
		}

		if (newHeight !== windowHeight) {
			windowHeight = newHeight;
		}

		setTimeout(() => {
			isShow = false;
		}, 1500);
	});
</script>

{#if isShow}
	<div transition:fade={{ duration: 100 }}>
		<span class="badge badge-info">
			{windowWidth}px &times; {windowHeight}px
		</span>
	</div>
{/if}

<style>
	div {
		position: fixed;
		bottom: 12px;
		left: 12px;
		z-index: 9999;
	}
</style>
