<script lang="ts">
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
  import { inject as injectAnalytics } from '@vercel/analytics';
  import { fly } from 'svelte/transition';

  import { dev, browser } from '$app/environment';

  import '$lib/styles/app.css';
  import WindowSizeIndicator from '$lib/components/layout/window-size-indicator.svelte';
  import Header from '$lib/components/layout/header/index.svelte';
  import Footer from '$lib/components/layout/footer/index.svelte';

  import type { LayoutData } from './$types';

  injectSpeedInsights();
  injectAnalytics({ mode: dev ? 'development' : 'production' });

  export let data: LayoutData;
</script>

<svelte:head>
  <title
    >{data.siteName +
      (data.pageName === ''
        ? ''
        : ` | ${data.pageName.charAt(0).toUpperCase() + data.pageName.slice(1)}`)}</title
  >
  <meta name="description" content="パク ソンジュンのポートフォリオサイト" />
  <script>
    const theme = localStorage.getItem('theme');
    document.documentElement.setAttribute(
      'data-theme',
      theme ??
        (window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dim'
          : 'autumn')
    );
  </script>
</svelte:head>

<div class="min-h-screen md:grid md:grid-cols-layout md:max-w-7xl md:mx-auto">
  {#if browser}
    <WindowSizeIndicator />
  {/if}
  <Header />
  <div class="col-start-2 col-end-4 xl:col-end-3">
    {#key data.pageName}
      <main
        in:fly={{ y: 20, duration: 200, delay: 200 }}
        out:fly={{ y: -20, duration: 200 }}
        class="flex flex-col max-w-3xl pt-4 md:pt-8 px-4 md:px-8 lg:px-12 pb-12 md:pb-0"
      >
        <slot />
      </main>
    {/key}
  </div>
  <Footer />
</div>
