<script lang="ts">
  import { fade } from 'svelte/transition';

  import { getIsMobile } from '$lib/utils/ua-helper';
  import { debounce } from '$lib/utils/callback-helper';

  const isMobile = getIsMobile();

  let isShow = false;

  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  const handleResize = debounce(() => {
    isShow = true;

    let newWidth = window.innerWidth;
    let newHeight = window.innerHeight;

    if (newWidth !== windowWidth) {
      windowWidth = newWidth;
    }

    if (newHeight !== windowHeight) {
      windowHeight = newHeight;
    }

    setTimeout(() => {
      isShow = false;
    }, 1500);
  }, 100);

  window.addEventListener('resize', handleResize);
</script>

{#if !isMobile && isShow}
  <div
    class="fixed bottom-[12px] left-[12px] z-[9999]"
    transition:fade={{ duration: 100 }}
  >
    <span class="badge badge-info">
      {windowWidth}px &times; {windowHeight}px
    </span>
  </div>
{/if}
