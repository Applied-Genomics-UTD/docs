---
title: nf-core
description: "A community effort to collect a curated set of analysis pipelines built using Nextflow."
sidebar:
  order: 2
---

## nf-core Intro

<iframe src="https://www.youtube.com/embed/gUM9acK25tQ"
title="Introduction to nf-core" frameborder="0" allow="accelerometer; autoplay;
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
nextflow run nf-core/rnaseq -profile test,docker --outdir results
```

### Download the Multiqc Report

1. Open up the file explorer and navigate to
   `results/multiqc/multiqc_report.html` and _right-click_ the html
   file and select Download.
2. Now that the [MultiQC](https://multiqc.info/) report is on your local computer open it up in a web
   browser. Preferably next to the [pipeline's output
   docs](https://nf-co.re/rnaseq/dev/output).

:::tip[What's MultiQC?]

A tool that aggregate results from bioinformatics analyses across many samples into a single report.

MultiQC searches a given directory for analysis logs and compiles a HTML report. It's a general use tool, perfect for summarizing the output from numerous bioinformatics tools.

:::

# Using nf-core pipelines in Snakemake

> Snakemake 6.2 and later allows to hand over execution steps to other workflow management systems. By this, it is possible to make use of workflows written for other systems, while performing any further pre- or postprocessing within Snakemake.

[Snakemake Docs](https://snakemake.readthedocs.io/en/stable/snakefiles/foreign_wms.html)

```snakemake
rule chipseq_pipeline:
    input:
        input="design.csv",
        fasta="data/genome.fasta",
        gtf="data/genome.gtf",
        # any --<argname> pipeline file arguments can be given here as <argname>=<path>
    output:
        "results/multiqc/broadPeak/multiqc_report.html",
    params:
        pipeline="nf-core/chipseq",
        revision="2.0.0",
        profile=["test", "docker"],
        # The chosen pipeline expects an --outdir to be given.
        # We infer this from the output file path. Since that file path can be changed
        # e.g. in case of cloud storage, we use a lambda function to infer the outdir.
        outdir=lambda wildcards, output: str(Path(output[0]).parents[-2]),
        # any --<argname> pipeline arguments can be given here as <argname>=<value>
    handover: True
    wrapper:
        "v3.12.1/utils/nextflow"
```

[Snakemake Nextflow Wrapper Docs](https://snakemake-wrappers.readthedocs.io/en/stable/wrappers/nextflow.html)

## Testing nf-core/rnaseq in Snakemake

```snakemake title="Snakefile"
rule rnaseq_pipeline:
    output:
        "results/multiqc/star_salmon/multiqc_report.html",
    params:
        pipeline="nf-core/rnaseq",
        revision="dev",
        profile=["test", "docker"],
        # The chosen pipeline expects an --outdir to be given.
        # We infer this from the output file path. Since that file path can be changed
        # e.g. in case of cloud storage, we use a lambda function to infer the outdir.
        outdir=lambda wildcards, output: str(Path(output[0]).parents[-2]),
    handover: True
    wrapper:
        "v3.12.1/utils/nextflow"
```

```bash
snakemake --cores 2
```

:::tip [While you wait]

You might compare the Snakemake rule and the `nextflow run ...` command that was used earlier to run the nf-core/rnaseq pipeline

:::
