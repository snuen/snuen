<script lang="ts">
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	import Sun from '$lib/components/svgs/sun.svelte';
	import Moon from '$lib/components/svgs/moon.svelte';
	import Icon from '$lib/components/atoms/icon.svelte';

	let themeTarget: string | undefined;
	let currentTheme: string | undefined;
	if (typeof window !== 'undefined') {
		currentTheme = localStorage.getItem('theme') ?? 'autumn';
		switch (currentTheme) {
			case 'autumn':
				themeTarget = 'dim';
				break;
			case 'dim':
				themeTarget = 'autumn';
				break;
			default:
				themeTarget = 'dim';
				break;
		}
	}

	onMount(() => {
		themeChange(false);
	});
</script>

<li class="px-2 border-l border-dashed border-l-current md:border-none md:mb-2">
	<label class="swap swap-rotate w-10 h-full px-0 md:px-2">
		<input
			type="checkbox"
			class="theme-controller"
			value={themeTarget}
			data-toggle-theme="autumn,dim"
		/>
		<Icon className={'w-6 h-6' + ' ' + (currentTheme === 'autumn' ? 'swap-on' : 'swap-off')}>
			<Sun />
		</Icon>
		<Icon className={'w-5 h-5' + ' ' + (currentTheme === 'dim' ? 'swap-on' : 'swap-off')}>
			<Moon />
		</Icon>
	</label>
</li>
