import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Applied Genomics',
      // Add a script to use web analytics.
      head: [
        {
          tag: 'script',
          attrs: {
            // Tweaks to the script URL or attributes can be made here.
            src: '//gc.zgo.at/count.js',
            'data-goatcounter': 'https://applied-genomics.goatcounter.com/count',
            async: true,
          },
        },
      ],
      social: {
        github: 'https://github.com/Applied-Genomics-UTD',
      },
      sidebar: [
        {
          label: 'Course',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Overview', link: '/guides/00-overview' },
            { label: 'Week 1', link: '/guides/week_01/' },
            { label: 'Week 2', link: '/guides/week_02/' },
            { label: 'RNA-Seq', link: '/guides/rna-seq/' },
            { label: 'ChIP-Seq', link: '/guides/chip-seq/' },
            { label: 'Variant Calling', link: '/guides/variant-calling/' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
