---
title: Introduction to Snakemake
description: Workflows in Bioinformatics
sidebar:
  order: 1
---

# [Slides](https://slides.com/johanneskoester/snakemake-tutorial)

# Workflow Managers

![Empowering bioinformatics communities with Nextflow and nf-core: Figure 1](https://www.biorxiv.org/content/biorxiv/early/2024/05/14/2024.05.10.592912/F1.medium.gif)

# Why Snakemake?

Why not Nextflow? Isn't nf-core built using Nextflow?

In the past we did a Makefile based pipeline, and then moved on to Nextflow. The two have very different paradigmes a "pull" vs a "push" of the data.

The main issue that we ran into is the [error message handling](https://github.com/nextflow-io/nextflow/issues/2082). Students were able to write workflows and get pretty far using GitHub Copilot. But inevitably, Copilot wrote some strange code and they had issues and the Nextflow interpreter spit out these errors that guided them to the complete wrong part of the code and they'd get really frustrated and it's difficult to get in a groove for a new user because you don't know what you're looking for.

So to avoid the "you just learned Makefiles, now here's Snakemake" we're just going to skip directly over that and go right to Snakemake. Created in **1977**, Make has its quirks. So we're just going avoid those quirks and skip right to the useful stuff!

Snakemake has the features needed for academic work anyways(and a few Nextflow doesn't):

1. Creating "workflows" using unix commands and wildcards.
2. Ability to point to a file on the internet and download it without much effort.
3. Handling dependencies with Conda.
4. Support for Slurm.
5. Jupyter Notebooks built-in for exploratory work. (Nextflow doesn't have this)
6. [Wrappers for common bioinformatics tools](https://snakemake-wrappers.readthedocs.io/en/stable/).
