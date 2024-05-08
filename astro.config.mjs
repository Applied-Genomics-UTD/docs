import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Applied Genomics",
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
              // link: "/course/week_01/",
              autogenerate: { directory: "/course/week_01/" },
            },
            { label: "Week 2", link: "/course/week_02/" },
            { label: "RNA-Seq", link: "/course/rna-seq/" },
            { label: "ChIP-Seq", link: "/course/chip-seq/" },
            { label: "Variant Calling", link: "/course/variant-calling/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
