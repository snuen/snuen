<script lang="ts">
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	import '$lib/styles/app.css';
	import User from '$lib/components/svgs/user.svelte';
	import Squares2x2 from '$lib/components/svgs/squares-2x2.svelte';
	import Briefcase from '$lib/components/svgs/briefcase.svelte';
	import AtSymbol from '$lib/components/svgs/at-symbol.svelte';
	import Sun from '$lib/components/svgs/sun.svelte';
	import Moon from '$lib/components/svgs/moon.svelte';
	import Icon from '$lib/components/atoms/icon.svelte';

	import type { LayoutData } from './$types';

	export let data: LayoutData;

	type NavListItem = {
		label: string;
		href: string;
		Svg: unknown;
	};

	const navList = [
		{ label: 'me', href: '/', Svg: User },
		{ label: 'projects', href: '/projects', Svg: Squares2x2 },
		{ label: 'work', href: '/work', Svg: Briefcase },
		{ label: 'contact', href: '/contact', Svg: AtSymbol }
	] as const satisfies readonly NavListItem[];

	onMount(() => {
		themeChange(false);
	});
</script>

<svelte:head>
	<title
		>{data.siteName +
			(data.pageName === ''
				? ''
				: ` | ${data.pageName.charAt(0).toUpperCase() + data.pageName.slice(1)}`)}</title
	>
</svelte:head>

<div class="md:flex min-h-screen">
	<header class="fixed right-0 bottom-0 left-0 md:top-0 md:w-64 md:py-10 md:px-6 bg-base-200">
		<nav class="md:h-full">
			<ul class="menu menu-horizontal md:menu-vertical flex px-0 md:h-full">
				{#each navList as { label, href, Svg }, i ({ href })}
					<li
						class={'flex-grow md:flex-grow-0 px-2' +
							' ' +
							(i === navList.length - 1 ? 'md:mb-auto' : 'md:mb-2')}
					>
						<a
							{href}
							class="flex justify-center md:justify-start w-full h-full px-0 md:px-2 uppercase"
						>
							<Icon className="w-4 h-4">
								<Svg />
							</Icon>
							<span class="hidden sm:block">{label}</span>
						</a>
					</li>
				{/each}
				<li class="px-2 border-l border-dashed border-l-neutral-800 md:border-none md:mb-2">
					<label class="swap swap-rotate w-10 h-full px-0 md:px-2">
						<input
							type="checkbox"
							class="theme-controller"
							value=""
							data-toggle-theme="autumn,forest"
						/>
						<Icon className="swap-on w-6 h-6">
							<Sun />
						</Icon>
						<Icon className="swap-off w-5 h-5">
							<Moon />
						</Icon>
					</label>
				</li>
				<!-- <li class="px-2 border-l border-dashed border-l-neutral-800 md:border-none">
					<button type="button" class="flex justify-center w-10 h-full px-0 md:px-2">EN</button>
				</li> -->
			</ul>
		</nav>
	</header>
	<main class="flex flex-grow pb-12 md:pb-0 md:pl-64">
		<div class="container pt-4 md:pt-8 px-4 md:px-8 lg:px-12">
			<slot />
		</div>
	</main>
	<footer class="hidden xl:block w-64 bg-base-200" />
</div>
