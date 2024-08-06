<script lang="ts">
  import ModeSwitcher from '$lib/components/ModeSwitcher.svelte';
  import '../app.css';
  import { ModeWatcher } from 'mode-watcher';
  import { Download, Github, Menu, ExternalLinkIcon } from 'lucide-svelte';

  // svelte animation stuff
  import { flip } from 'svelte/animate';
  import { Button } from '$ui/button';
  import { scale } from 'svelte/transition';
  import { elasticIn, elasticOut, cubicOut, cubicIn } from 'svelte/easing';
  import { cn } from '$lib/utils/shadcn';
  import Badge from '$ui/badge/badge.svelte';
  let { children } = $props();

  let sidebarActive = $state(false);

  const menuParams = {
    in: {
      opacity: 1,
      duration: 100,
      easing: cubicOut,
    },
    out: {
      opacity: 0,
      duration: 250,
      easing: cubicOut,
    },
  };
</script>

<ModeWatcher />

<aside class="fixed right-0 top-0 z-50 m-4 lg:m-0 print:hidden">
  <Button
    variant="ghost"
    size="icon"
    class={cn('m-4 mb-2', sidebarActive && 'button-active')}
    on:click={() => (sidebarActive = !sidebarActive)}
  >
    <Menu class="h-8 w-8" />
    <span class="sr-only">Menu</span>
  </Button>
  {#if sidebarActive}
    <div
      in:scale={{ ...menuParams.in }}
      out:scale={{ ...menuParams.out }}
      class="flex origin-top flex-col items-center gap-4 rounded-3xl bg-background/50 p-4 backdrop-blur-lg transition-transform duration-300 print:hidden"
    >
      <Button
        variant="ghost"
        size="icon"
        class="relative"
        href="https://github.com/cudd-io/erika-resume"
      >
        <Github class="h-6 w-6" />
        <span class="sr-only">Source Code</span>
      </Button>

      <Button
        href="/erika-resume.pdf"
        target="_blank"
        variant="ghost"
        size="icon"
        class={sidebarActive && 'button-active'}
      >
        <Download class="h-6 w-6" />
        <span class="sr-only">Download as PDF</span>
      </Button>
      <!-- <a href="/erika-resume.pdf" target="_blank">Download as PDF</a> -->
      <!-- <a href="https://github.com/cudd-io/erika-resume" target="_blank">Source Code</a> -->
      <ModeSwitcher />
    </div>
  {/if}
</aside>
<main class="p-4 print:p-0">
  {@render children()}
</main>
