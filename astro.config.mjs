import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Applied Genomics",
      editLink: {
        baseUrl: "https://github.com/Applied-Genomics-UTD/docs/edit/main/",
      },
      // Add a script to use web analytics.
      head: [
        {
          tag: "script",
          attrs: {
            // Tweaks to the script URL or attributes can be made here.
            src: "//gc.zgo.at/count.js",
            "data-goatcounter":
              "https://applied-genomics.goatcounter.com/count",
            async: true,
          },
        },
      ],
      social: {
        github: "https://github.com/Applied-Genomics-UTD",
      },
      sidebar: [
        {
          label: "Course",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Overview", link: "/course/" },
            {
              label: "Week 1",
              autogenerate: { directory: "/course/week_01/" },
            },
            {
              label: "Week 2",
              autogenerate: { directory: "/course/week_02/" },
            },
            {
              label: "Week 3",
              autogenerate: { directory: "/course/week_03/" },
            },
            {
              label: "Week 4",
              autogenerate: { directory: "/course/week_04/" },
            },
            {
              label: "Week 5",
              autogenerate: { directory: "/course/week_05/" },
            },
            {
              label: "Week 6",
              autogenerate: { directory: "/course/week_06/" },
            },
            {
              label: "Week 7",
              autogenerate: { directory: "/course/week_07/" },
            },
            {
              label: "Week 8",
              autogenerate: { directory: "/course/week_08/" },
            },
            {
              label: "Project Guidelines",
              link: "/course/project_guidelines/",
            },
          ],
        },
        {
          label: "Slides",
          collapsed: true,
          items: [
            {
              label: "Introduction",
              link: "https://slides.applied-genomics.dev/introduction/",
            },
            {
              label: "An Introduction to Unix",
              link: "https://docs.google.com/presentation/d/e/2PACX-1vQHJMsd5gRHxCwC8mQxNoD7sgCebbsEuuXsEhouvUxQ-2TcHmXSqol5cyX1ftxcwJ8etxwoPfLbWdCL/embed",
            },
            {
              label: "Reproducible Research",
              link: "https://slides.applied-genomics.dev/reproducible_research/",
            },
            {
              label: "Unix Data Analysis",
              link: "https://slides.applied-genomics.dev/unix_data_analysis/",
            },
            {
              label: "Snakemake",
              link: "https://slides.com/johanneskoester/snakemake-tutorial",
            },
            {
              label: "Databases",
              link: "/slides/databases.pdf",
            },
            {
              label: "Epigenomics",
              link: "/slides/epigenomics.pdf",
            },
            {
              label: "ChIP-SEQ",
              link: "https://slides.applied-genomics.dev/chipseq/",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
          collapsed: true,
        },
      ],
      plugins: [
        starlightLinksValidator({
          errorOnRelativeLinks: false,
        }),
      ],
    }),
  ],
});
