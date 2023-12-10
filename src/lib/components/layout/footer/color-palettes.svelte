<script lang="ts">
	import ClipBoardDocument from '$lib/components/svgs/clipboard-document.svelte';
	import Icon from '$lib/components/atoms/icon.svelte';

	type ColorListItem = {
		name: string;
		hex: string;
		textColor: 'white' | 'black';
	};

	const colorList = [
		{
			name: 'camel',
			hex: '#c19a6b',
			textColor: 'black'
		},
		{
			name: 'gold',
			hex: '#d4af37',
			textColor: 'black'
		},
		{
			name: 'mossGreen',
			hex: '#8a9a5b',
			textColor: 'black'
		},
		{
			name: 'brown',
			hex: '#5c4033',
			textColor: 'white'
		},
		{
			name: 'darkTurquoise',
			hex: '#00ced1',
			textColor: 'black'
		},
		{
			name: 'deepViolet',
			hex: '#330066',
			textColor: 'white'
		},
		{
			name: 'chocolateBrown',
			hex: '#3d1e1f',
			textColor: 'white'
		},
		{
			name: 'armyGreen',
			hex: '#4b5320',
			textColor: 'white'
		},
		{
			name: 'orangeRed',
			hex: '#ff4500',
			textColor: 'black'
		}
	] as const satisfies ColorListItem[];

	const handleClickButton = (hex: (typeof colorList)[number]['hex']) => {
		navigator.clipboard.writeText(hex);
	};
</script>

<menu class="flex flex-col h-screen">
	{#each colorList as { name, hex, textColor } ({ hex })}
		<li
			class="flex-grow flex flex-col gap-2 justify-center items-center text-center px-2"
			style={`background-color: ${hex}; color: ${textColor};`}
		>
			{name}
			<button
				type="button"
				on:click={() => handleClickButton(hex)}
				class="btn btn-sm glass w-fit h-8 text-xl"
			>
				<Icon className="w-4 h-4">
					<ClipBoardDocument />
				</Icon>
				{hex}</button
			>
		</li>
	{/each}
</menu>
