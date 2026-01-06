<script lang="ts">
  import { themeChange } from 'theme-change';

  import Icon from '$lib/styles/icon.svelte';
  import Sun from '$lib/components/svgs/sun.svelte';
  import Moon from '$lib/components/svgs/moon.svelte';

  let themeTarget = $state<string | undefined>(undefined);
  let currentTheme = $state<string | undefined>(undefined);

  function initializeTheme() {
    if (typeof window === 'undefined') return;

    const storedTheme = localStorage.getItem('theme') ?? undefined;
    currentTheme = storedTheme;

    switch (storedTheme) {
      case 'autumn':
        themeTarget = 'dim';
        break;
      case 'dim':
        themeTarget = 'autumn';
        break;
      default:
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          localStorage.setItem('theme', 'dim');
          themeTarget = 'autumn';
          currentTheme = 'dim';
        } else {
          localStorage.setItem('theme', 'autumn');
          themeTarget = 'dim';
          currentTheme = 'autumn';
        }
        break;
    }
  }

  $effect(() => {
    initializeTheme();
    themeChange(false);
  });
</script>

<label class="swap swap-rotate w-10 h-full px-0 md:px-2">
  <input
    type="checkbox"
    class="theme-controller"
    value={themeTarget}
    data-toggle-theme="autumn,dim"
  />
  <Icon
    className={[
      'w-5',
      'h-5',
      'md:w-6',
      'md:h-6',
      currentTheme === 'autumn' ? 'swap-on' : 'swap-off'
    ]}
  >
    <Sun />
  </Icon>
  <Icon
    className={[
      'w-4',
      'h-4',
      'md:w-5',
      'md:h-5',
      currentTheme === 'dim' ? 'swap-on' : 'swap-off'
    ]}
  >
    <Moon />
  </Icon>
</label>
