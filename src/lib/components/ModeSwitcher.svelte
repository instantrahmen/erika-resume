<script lang="ts">
  import Sun from 'lucide-svelte/icons/sun';
  import Moon from 'lucide-svelte/icons/moon';

  import { toggleMode, resetMode, mode } from 'mode-watcher';
  import { Button } from '$lib/components/ui/button';
  import { onMount } from 'svelte';

  const reset = () => {
    resetMode();
  };

  let isShift = $state(false);
  onMount(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Shift') {
        isShift = true;
      }
    };

    const onKeyup = (e: KeyboardEvent) => {
      if (e.key === 'Shift') {
        isShift = false;
      }
    };

    window.addEventListener('keydown', onKeydown);
    window.addEventListener('keyup', onKeyup);

    return () => {
      window.removeEventListener('keydown', onKeydown);
      window.removeEventListener('keyup', onKeyup);
    };
  });

  const toggle = () => {
    if (isShift) {
      reset();
    } else {
      toggleMode();
    }
  };
</script>

<Button on:click={toggle} variant="ghost" size="icon">
  <Sun
    class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
  />
  <Moon
    class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
  />
  <span class="sr-only">Toggle theme</span>
</Button>
