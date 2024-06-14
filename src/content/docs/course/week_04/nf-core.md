---
title: nf-core
description: "A community effort to collect a curated set of analysis pipelines built using Nextflow."
sidebar:
  order: 2
---

## nf-core Intro

<iframe width="560" height="315" src="https://www.youtube.com/embed/gUM9acK25tQ"
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>

> A community effort to collect a curated set of analysis pipelines built using
> Nextflow.

At UTD we have lots of core facilities. The genomics core, imaging core, etc...

and **nf-core**!

### Testing a pipeline

Usually you'd need to refer to the [nf-core installation docs](https://nf-co.re/usage/installation). 

However GitHub Codespaces cut out some of that work.

Let's run:

```bash
nextflow run nf-core/rnaseq -profile test,docker -r dev --outdir results
```

### Download the Multiqc Report

1. Open up the file explorer and navigate to
   `results/multiqc/multiqc_report.html` and _right-click_ the html
   file and select Download.
2. Now that the [MultiQC](https://multiqc.info/) report is on your local computer open it up in a web
   browser. Preferably next to the [pipeline's output
   docs](https://nf-co.re/rnaseq/dev/output).

::: info
What's [MultiQC](https://multiqc.info/)?

A tool that aggregate results from bioinformatics analyses across many samples into a single report.

MultiQC searches a given directory for analysis logs and compiles a HTML report. It's a general use tool, perfect for summarizing the output from numerous bioinformatics tools. 
:::
