<script lang="ts">
	import arrowTopRightOnSquare from '$lib/assets/images/arrow-top-right-on-square.svg';

	export let href: string;
	export let text: string;
</script>

<a {href} target="_blank" rel="noopener noreferrer" class="link inline-flex items-center"
	>{text}
	<img src={arrowTopRightOnSquare} alt="external link" class="inline-block w-4 h-4 ml-1" />
</a>
