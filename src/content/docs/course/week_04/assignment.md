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

## Steps

### Biostar Handbook Reproduction

Section 7 "The differntial expression" from I RNA-SEQ Step-by-step

1. Download the scripts in the "code" archive to calculate the differential expression
2. produce heatmaps
3. Compare results

### nf-core Golden Snidget Analysis

<!-- 0. Login to Sysbio -->

1. Run nf-core/rnaseq test profile by hand
<!-- 1b. Launch Workflow on Sysbio -->
2. Learn to wrap nf-core pipelines in Snakemake
3. Create samplesheet.csv for nf-core/rnaseq
4. Clean the data using Jupyter Notebooks
5. produce heatmap
6. Compare results with results from Biostar handbook

## Goals

### Are the Two analysis similar?

Using the `compare_results.r` script


## Useful Resources

- [Using R in Snakemake workflows](https://snakemake.readthedocs.io/en/stable/snakefiles/rules.html#r-and-r-markdown)
- [nf-core/rnaseq Docs on Samplesheets](https://nf-co.re/rnaseq/3.14.0/docs/usage#full-samplesheet)
- [nf-core/rnaseq Reference genome options](https://nf-co.re/rnaseq/3.14.0/docs/usage#reference-genome-options)
- [Snakemake Jupyter Integration](https://snakemake.readthedocs.io/en/stable/snakefiles/rules.html#jupyter-notebook-integration)
