<script lang="ts">
  import Icon from '$lib/styles/icon.svelte';
  import ClipBoardDocument from '$lib/components/svgs/clipboard-document.svelte';

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
      name: 'moss green',
      hex: '#8a9a5b',
      textColor: 'black'
    },
    {
      name: 'brown',
      hex: '#5c4033',
      textColor: 'white'
    },
    {
      name: 'dark turquoise',
      hex: '#00ced1',
      textColor: 'black'
    },
    {
      name: 'deep violet',
      hex: '#330066',
      textColor: 'white'
    },
    {
      name: 'chocolate brown',
      hex: '#3d1e1f',
      textColor: 'white'
    },
    {
      name: 'army green',
      hex: '#4b5320',
      textColor: 'white'
    },
    {
      name: 'orange red',
      hex: '#ff4500',
      textColor: 'black'
    }
  ] as const satisfies ColorListItem[];

  const shuffledColorList = colorList.sort(() => Math.random() - 0.5);

  const handleClickButton = (
    hex: (typeof colorList)[number]['hex'],
    currentTarget: EventTarget & HTMLButtonElement
  ) => {
    navigator.clipboard.writeText(hex);
    currentTarget.closest('[data-tip]')?.setAttribute('data-tip', 'copied!');
  };

  const handleMouseLeaveButton = (
    currentTarget: EventTarget & HTMLButtonElement
  ) => {
    setTimeout(() => {
      currentTarget.closest('[data-tip]')?.setAttribute('data-tip', 'copy');
    }, 300);
  };
</script>

<menu class="sticky top-0 grid grid-cols-2 h-screen min-h-[700px]">
  <li
    class="flex flex-col gap-2 px-2 justify-center items-center text-center text-sm"
  >
    <p class="text-sm">My<br />Personal Colors</p>
  </li>
  {#each shuffledColorList as { name, hex, textColor } ({ hex })}
    <li
      class="col-span-1 flex flex-col gap-2 px-2 justify-center items-center text-center text-sm"
      style={`background-color: ${hex}; color: ${textColor};`}
    >
      <span class="flex items-center h-10">{name}</span>
      <div class="tooltip tooltip-bottom" data-tip="copy">
        <button
          type="button"
          on:click={(ev) => handleClickButton(hex, ev.currentTarget)}
          on:mouseleave={(ev) => handleMouseLeaveButton(ev.currentTarget)}
          class="btn btn-sm glass w-fit h-8 px-2 text-sm"
        >
          <Icon className={['w-4', 'h-4']}>
            <ClipBoardDocument />
          </Icon>
          {hex}</button
        >
      </div>
    </li>
  {/each}
</menu>
