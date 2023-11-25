<script lang="ts">
	import '../app.css';
	import user from '../assets/user.svg';
	import squares2x2 from '../assets/squares-2x2.svg';
	import briefcase from '../assets/briefcase.svg';
	import atSymbol from '../assets/at-symbol.svg';
	import sun from '../assets/sun.svg';
	import moon from '../assets/moon.svg';

	type NavListItem = {
		label: string;
		href: string;
		icon: string;
	};

	const navList = [
		{ label: 'me', href: '/', icon: user },
		{ label: 'projects', href: '/projects', icon: squares2x2 },
		{ label: 'work', href: '/work', icon: briefcase },
		{ label: 'contact', href: '/contact', icon: atSymbol }
	] as const satisfies readonly NavListItem[];
</script>

<div class="md:flex min-h-screen">
	<header class="fixed right-0 bottom-0 left-0 md:top-0 md:w-64 md:py-10 md:px-6 bg-base-200">
		<nav class="md:h-full">
			<ul class="menu menu-horizontal md:menu-vertical flex px-0 md:h-full">
				{#each navList as { label, href, icon }, i ({ href })}
					<li
						class={'flex-grow md:flex-grow-0 px-2' +
							' ' +
							(i === navList.length - 1 ? 'md:mb-auto' : 'md:mb-2')}
					>
						<a
							{href}
							class="flex justify-center md:justify-start w-full h-full px-0 md:px-2 uppercase"
						>
							<img src={icon} alt={label} width="20" height="20" />
							<span class="hidden sm:block">{label}</span>
						</a>
					</li>
				{/each}
				<li class="px-2 border-l border-dashed border-l-neutral-800 md:border-none md:mb-2">
					<label class="swap swap-rotate w-10 h-full px-0 md:px-2">
						<input type="checkbox" class="theme-controller" value="" />
						<img src={sun} alt="sun" width="20" height="20" class="swap-on" />
						<img src={moon} alt="moon" width="20" height="20" class="swap-off" />
					</label>
				</li>
				<li class="px-2 border-l border-dashed border-l-neutral-800 md:border-none">
					<button type="button" class="flex justify-center w-10 h-full px-0 md:px-2">EN</button>
				</li>
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
