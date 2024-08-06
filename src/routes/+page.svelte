<script>
  import { cn } from '$lib/utils/shadcn';
  import { Separator } from '$ui/separator';
  import { MailIcon, PhoneIcon, LinkedinIcon, Globe, Github } from 'lucide-svelte';
  import { parse } from 'marked';

  const info = {
    image:
      'https://media.licdn.com/dms/image/D4D03AQHlyJsW6adVSw/profile-displayphoto-shrink_800_800/0/1713907165485?e=1728518400&v=beta&t=ta4a0ktfvT25xcb2jIzNwAOonHpC16j-Qv_zr-8NVBs',
    name: 'Erika Cudd',
    tagline: 'Front-end Developer',
    links: [
      {
        label: 'Portfolio',
        href: 'https://cudd.io',
        icon: Globe,
      },
      {
        label: 'GitHub',
        href: 'https://github.com/instantrahmen, https://github.com/saltyNoodles',
        text: 'instantrahmen, saltyNoodles',
        icon: Github,
      },
      {
        label: 'Email',
        href: 'erika@cudd.io',
        noLink: true,
        icon: MailIcon,
      },
      {
        label: 'Linkedin',
        href: 'https://www.linkedin.com/in/erika-cudd',
        text: 'erika-cudd',
        noLink: false,
        icon: LinkedinIcon,
      },
      {
        label: 'Phone',
        href: '(423) 402-0460',
        noLink: true,
        icon: PhoneIcon,
      },
    ],

    sections: {
      aboutMe: {
        title: 'About Me',
        body: `
Hi, I'm Erika! I'm a front-end web developer with 6+ years of professional experience in full-stack development with a strong focus on the front-end.  
<br />
I am have experience and am comfortable working in React, Svelte, Vue, and TypeScript as well as multiple back-end technologies such as Node/Express, Laravel, and Ruby on Rails. Development is my passion and I'm always striving to learn more and stay up-to-date in the constantly shifting web development world.  
<br/> 

I've worked with multiple companies to modernize legacy codebases and helped build and many web apps of all sizes.
        `,
      },
      skills: {
        title: 'Tech I use',
        items: [
          { name: 'React' },
          { name: 'React Native' },
          { name: 'TypeScript' },
          { name: 'Svelte' },
          { name: 'Vue' },
          { name: 'Node.js' },
          { name: 'Tailwind CSS' },
          { name: 'CSS' },
          { name: 'Ionic' },
          { name: 'Capacitor' },
          { name: 'Electron' },
          { name: 'Next.js' },
          { name: 'Gatsby' },
          { name: 'Supabase' },
        ],
      },
      work: {
        title: 'Work Experience',
        items: [
          {
            title: 'Full Stack Engineer',
            company: 'Freelance',
            date: '06/2020 - Present',
            items: [
              'Work closely with clients to figure out their needs and use that info to create highly tailored app or website',
            ],
          },
          {
            title: 'Front End Engineer',
            company: 'FreightWaves, Inc.',
            date: '12/2019 - 07/2020',
            items: [
              'Fix bugs and add features to Sonar front-end',
              'Help with a Vue rewrite of core components of Sonar',
              'Work closely with data science and back-end team to create new features',
            ],
          },
          {
            title: 'Full Stack Engineer',
            company: 'Video Ideas Productions / PointsMap LLC',
            date: '03/2018 - 12/2019',
            items: [
              'Maintain many in-house and client applications',
              'Server maintenance',
              'Redesign and migrate their existing PointMap app from Ionic v1 to a progressive web app written in React',
              'Work closely with clients to create web and mobile apps based on their specific needs',
            ],
          },
        ],
      },
    },
  };
</script>

<div class="m-0 flex min-h-screen flex-col items-center justify-center p-0 print:items-start">
  <div
    class={cn(
      `w-full max-w-screen-lg rounded-lg bg-background/50 p-2 shadow-lg shadow-purple-950/20 backdrop-blur-lg sm:p-6`,
      'print:m-0 print:p-6 print:shadow-none',
    )}
  >
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
      <div
        class={cn(
          'col-span-1 rounded-lg bg-white/50 p-6 shadow-lg backdrop-blur-lg sm:p-8',
          'print:max-h-[98vh]',
        )}
      >
        <div class="flex flex-col items-center">
          <img
            src={info.image}
            alt={info.name}
            width={120}
            height={120}
            class="aspect-square rounded-full border-2 border-primary/50 object-cover shadow-md shadow-purple-950/20"
          />
          <h1 class="mt-4 text-2xl font-light tracking-wide">{info.name}</h1>
          <p class="tracking-wide text-muted-foreground">{info.tagline}</p>
        </div>
        {@render separator()}
        <div class="space-y-4">
          <div>
            <h2 class="text-lg font-light">Contact</h2>
            {#each info.links as link}
              {@const el = link.noLink ? 'span' : 'a'}
              {@const hrefs = link.href.split(',').map((h) => h.trim())}
              {@const text = link.text?.split(',').map((h) => h.trim()) || []}

              <div class="mt-2 grid grid-cols-[auto,1fr] items-center gap-2">
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
                  {/each}
                </span>
              </div>
            {/each}
          </div>
          {@render separator()}

          <div>
            <h2 class="text-lg font-light">{info.sections.skills.title}</h2>
            <div class="mt-2 grid grid-cols-[repeat(2,_minmax(85px,1fr))] gap-2">
              {#each info.sections.skills.items as skill}
                <div
                  class="col-span-1 flex w-full min-w-fit items-center rounded-lg border border-primary/50 bg-white/60 px-2 py-1 text-xs font-medium tracking-wide text-muted-foreground shadow-sm shadow-purple-950/20 backdrop-blur-lg"
                >
                  {skill.name}
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-2 space-y-6 sm:p-0">
        <div>
          <h2 class="text-2xl font-light">{info.sections.aboutMe.title}</h2>
          <p class="mt-2 text-muted-foreground">
            {@html parse(info.sections.aboutMe.body)}
          </p>
        </div>
        {@render separator()}
        <div>
          <h2 class="text-2xl font-light">{info.sections.work.title}</h2>
          <div class="mt-4 space-y-4">
            {#each info.sections.work.items as work}
              <div>
                <h3 class="text-lg font-semibold">{work.title}</h3>
                <p class="text-muted-foreground">{work.company}</p>
                <p class="text-muted-foreground">{work.date}</p>
                <ul class="mt-2 list-disc pl-6 text-muted-foreground">
                  {#each work.items as item}
                    <li>{item}</li>
                  {/each}
                </ul>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{#snippet separator()}
  <Separator class="my-6 border-b-primary/50 bg-primary/50 print:border-b" />
{/snippet}
