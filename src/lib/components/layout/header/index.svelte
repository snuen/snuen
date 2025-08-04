<script lang="ts">
  import NavLinks from './nav-links.svelte';
  import ThemeController from './theme-controller.svelte';
</script>

<header
  class="col-start-1 col-end-2 fixed right-0 bottom-0 left-0 md:static z-10 md:w-64 md:py-10 md:px-6 bg-base-200"
>
  <nav class="md:sticky md:top-10 md:h-[calc(100vh-5rem)]">
    <ul
      class="menu menu-horizontal md:menu-vertical flex w-auto px-0 md:h-full"
    >
      <NavLinks />
      <li
        class="px-2 border-l border-dashed border-l-current md:border-none md:mb-2"
      >
        <ThemeController />
      </li>
    </ul>
  </nav>
</header>
