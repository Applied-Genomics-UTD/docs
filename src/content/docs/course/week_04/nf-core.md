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

[nf-core installation docs](https://nf-co.re/usage/installation)

<!-- TODO These won't be necessary for a codespace -->

1. Move into your chipseq repo
2. Install Nextflow

```bash
curl -fsSL get.nextflow.io | bash
mv nextflow ~/bin
```

3. Activate singularity

```bash
ml load singularity
```

4. Run

```bash
nextflow run nf-core/rnaseq -profile test,utd_sysbio -r dev --outdir test-run
```

5. Update your `.gitignore`

```codeowners
.nextflow*
work/
data/
results/
```
