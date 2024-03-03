<script lang="ts">
  import Icon from '$lib/styles/icon.svelte';
  import User from '$lib/components/svgs/user.svelte';
  import Squares2x2 from '$lib/components/svgs/squares-2x2.svelte';
  import Briefcase from '$lib/components/svgs/briefcase.svelte';
  import AtSymbol from '$lib/components/svgs/at-symbol.svelte';

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
  ] as const satisfies NavListItem[];
</script>

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
      <Icon className={['w-4', 'h-4']}>
        <Svg />
      </Icon>
      <span class="hidden sm:block">{label}</span>
    </a>
  </li>
{/each}
