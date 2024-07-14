---
title: The Golden Snidget
description: A mash up of RNA-seq by example, nf-core, and Snakemake
sidebar:
  order: 10
  badge:
    text: Lab
---

# [GitHub Assignment Link](https://classroom.github.com/a/2CuxKp5r)

A mash up of [RNA-seq by Example](https://www.biostarhandbook.com/books/rnaseq/introducing-the-golden-snidget.html), [nf-core](https://nf-co.re/rnaseq/3.14.0), and [Snakemake: Integrating foreign workflow management systems](https://snakemake.readthedocs.io/en/stable/snakefiles/foreign_wms.html). <!-- on a cluster -->

In order to clean up the output from nf-core/rnaseq into a format that can be used by the biostar script we're going to use Jupyter Notebooks.

## Input files

- [Biostar Handbook Counts file](http://data.biostarhandbook.com/books/rnaseq/data/counts.csv)
- [Obtain the biostar handbook rnaseq scripts](http://data.biostarhandbook.com/books/rnaseq/code.tar.gz)

## Goals

1. Reproduce the analysis in the Biostar handbook for the `counts.csv`(1 point each)

   - [ ] `results.csv` for deseq2
   - [ ] `heatmap` for deseq2
   - [ ] `results.csv` for edgeR
   - [ ] `heatmap` for edgeR
   - [ ] `heatmap` for the example.csv
   - [ ] A step to compare edgeR results to deseq2 using `compare_results.R`

:::tip
Section 7 "The differential expression" from I RNA-SEQ Step-by-step
:::

2. Reanalyze the Golden Snidget data using [nf-core/rnaseq](https://nf-co.re/rnaseq)(1 point each)
    <!-- 0. Login to Sysbio -->
   - [ ] Download the references
   - [ ] Run the nf-core/rnaseq pipeline on the provided data
     - [ ] Create a samplesheet for the workflow
     - [ ] Pass the samplesheet, and reference files to the workflow
     <!-- 1b. Launch Workflow on Sysbio -->
   - [ ] Clean the results from the pipeline to a format that matches the `results.csv` created for deseq2 and edgeR in the Biostar Handbook using a Jupyter Notebook.
   - [ ] Produce the heatmap for the nf-core results.
   - [ ] Using the `compare_results.r` script compare the results between nf-core and the Biostar Handbook methods. Write the best method in the `README.md`.

Bonus Points:

- [ ] The workflow is reproducible. The command ran will be `snakemake --cores 4`(Unless you state otherwise in the `README.md`) (2 Points)
- [ ] The workflow follows [Snakefmt](https://github.com/snakemake/snakefmt) and passes `snakefmt --check`.(2 Points)

:::note
The points purposely add up to more than 10.
:::

## Useful Resources

- [Using R in Snakemake workflows](https://snakemake.readthedocs.io/en/stable/snakefiles/rules.html#r-and-r-markdown)
- [Snakemake Nextflow wrapper](https://snakemake-wrappers.readthedocs.io/en/stable/wrappers/nextflow.html)
- [nf-core/rnaseq Docs on Samplesheets](https://nf-co.re/rnaseq/3.14.0/docs/usage#full-samplesheet)
- [nf-core/rnaseq Reference genome options](https://nf-co.re/rnaseq/3.14.0/docs/usage#reference-genome-options)
- [Snakemake Jupyter Integration](https://snakemake.readthedocs.io/en/stable/snakefiles/rules.html#jupyter-notebook-integration)
