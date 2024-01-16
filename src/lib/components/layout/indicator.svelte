<script lang="ts">
	let windowWidth = window.innerWidth;
	let windowHeight = window.innerHeight;

	window.addEventListener('resize', () => {
		let newWidth = window.innerWidth;
		let newHeight = window.innerHeight;

		if (newWidth !== windowWidth) {
			windowWidth = newWidth;
		}

		if (newHeight !== windowHeight) {
			windowHeight = newHeight;
		}
	});
</script>

<div class="indicator hidden md:block">
	<span class="indicator-item indicator-bottom indicator-start badge badge-secondary">
		{windowWidth}px &times; {windowHeight}px
	</span>
</div>

<style>
	.indicator {
		position: fixed;
		bottom: 28px;
		left: 80px;
		z-index: 9999;
	}
</style>
