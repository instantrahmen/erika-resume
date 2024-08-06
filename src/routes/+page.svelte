<script lang="ts">
  import { cn } from '$lib/utils/shadcn';
  import { Separator } from '$ui/separator';
  import { info } from '@/data';
  import { parse } from 'marked';
</script>

<svelte:head>
  <title>{info.name} - {info.tagline}</title>
</svelte:head>

<div class="m-0 flex min-h-screen flex-col items-center justify-start p-0 print:items-start">
  <div
    class={cn(
      `w-full max-w-screen-lg rounded-lg bg-background/50 p-2 shadow-lg shadow-purple-950/20 backdrop-blur-lg sm:p-6`,
      'print:m-0 print:p-6 print:shadow-none',
    )}
  >
    <div
      class="grid grid-cols-1 gap-x-0 gap-y-6 @container sm:grid-cols-3 sm:gap-x-6 print:gap-x-8"
    >
      <div
        class={cn(
          'col-span-1 rounded-lg border border-primary/50 p-6  shadow-lg backdrop-blur-lg @md:p-8  ',
          'print:max-h-[98vh]  print:rounded-none print:bg-none print:p-8 print:shadow-none',
          'print:border-y-0 print:border-l-0 print:border-r',
        )}
      >
        <header class="flex flex-col items-center">
          <img
            src={info.image}
            alt={info.name}
            width={120}
            height={120}
            class="aspect-square rounded-full border-2 border-primary/50 object-cover shadow-md shadow-purple-950/20"
          />
          <h1 class="mt-4 text-2xl font-light tracking-wide">{info.name}</h1>
          <p class="tracking-wide text-muted-foreground">{info.tagline}</p>
        </header>
        {@render separator()}
        <div class="my-4">
          <section class="flex flex-col gap-2" id="contact-info">
            {#each info.links as link}
              {@const el = link.noLink ? 'span' : 'a'}
              {@const hrefs = link.href.split(',').map((h) => h.trim())}
              {@const text = link.text?.split(',').map((h) => h.trim()) || []}

              <div class="0 grid grid-cols-[auto,1fr] items-center gap-2">
                <svelte:component this={link.icon} class="h-5 w-5 text-muted-foreground" />
                <span class="text-xs text-muted-foreground">
                  {#each hrefs as href, i}
                    <svelte:element
                      this={el}
                      href={info.links ? href : undefined}
                      aria-label={link.label}
                      class={cn('text-xs text-muted-foreground', link.noLink || 'hover:underline')}
                    >
                      {text[i] || href}
                    </svelte:element>{i < hrefs.length - 1 ? ', ' : ''}
                    <span class="sr-only">{link.label}</span>
                  {/each}
                </span>
              </div>
            {/each}
          </section>

          {@render separator()}

          <section id="skills" class="@container">
            <h2 class="text-lg font-light">{info.sections.skills.title}</h2>
            <div
              class="mt-2 grid grid-cols-1 gap-2 @[150px]:grid-cols-[repeat(2,_minmax(85px,1fr))] @[350px]:grid-cols-3 @[500px]:grid-cols-5"
            >
              {#each info.sections.skills.items as skill}
                <div
                  class="col-span-1 flex w-full min-w-fit items-center justify-center rounded-lg border border-primary/50 bg-background/60 px-2 py-1 text-center text-xs font-medium tracking-wide text-muted-foreground shadow-sm shadow-purple-950/20 backdrop-blur-lg"
                >
                  {skill.name}
                </div>
              {/each}
            </div>
          </section>
        </div>
      </div>
      <div id="" class="col-span-2 space-y-6 sm:p-0">
        <section id="about">
          <h2 class="text-2xl font-light">{info.sections.aboutMe.title}</h2>
          <p class="mt-2 text-muted-foreground">
            {@html parse(info.sections.aboutMe.body)}
          </p>
        </section>
        {@render separator()}
        <section id="experience">
          <h2 class="text-2xl font-light">{info.sections.work.title}</h2>
          <div class="mt-4 space-y-4">
            {#each info.sections.work.items as work}
              <div>
                <h3 class="text-lg font-semibold">{work.title}</h3>
                <p class="text-muted-foreground">{work.company}</p>
                <p class="text-xs text-muted-foreground">{work.date}</p>
                <ul class="mt-2 list-disc pl-6 text-muted-foreground">
                  {#each work.items as item}
                    <li>{item}</li>
                  {/each}
                </ul>
              </div>
            {/each}
          </div>
        </section>
      </div>
    </div>
  </div>
</div>

{#snippet separator()}
  <Separator class="my-6 border-b-primary/50 bg-primary/50 print:border-b" />
{/snippet}
