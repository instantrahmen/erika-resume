import { Globe, Github, MailIcon, LinkedinIcon, PhoneIcon } from 'lucide-svelte';
import image from '$lib/assets/erika-photo.jpeg';
export const info = {
  image,
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
I have experience and am comfortable working in React, Svelte, Vue, and TypeScript as well as multiple back-end technologies such as Node/Express, Laravel, and Ruby on Rails. Development is my passion and I'm always striving to learn more and stay up-to-date in the constantly shifting web development world.  
<br/> 

I've worked with multiple companies to modernize legacy codebases and helped build many web apps of all sizes.
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
        { name: 'Tailwind' },
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
