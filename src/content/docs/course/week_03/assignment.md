---
title: Intro to Snakemake
description: "https://classroom.github.com/a/AouULae5"
sidebar:
  order: 10
  badge:
    text: Lab
---

[GitHub Classroom Assignment](https://classroom.github.com/a/AouULae5)

We'll be going through the Snakemake [Basics: An example workflow
](https://snakemake.readthedocs.io/en/stable/tutorial/basics.html) tutorial

## Installing the Data

```sh
curl -L https://api.github.com/repos/snakemake/snakemake-tutorial-data/tarball -o snakemake-tutorial-data.tar.gz
tar --wildcards -xf snakemake-tutorial-data.tar.gz --strip 1 "*/data"
```

:::tip

There's a rule commented out in the `Snakefile` that will do this automatically

:::

## Criteria

To complete the assignment the following will be worth 2 points each:

1. Generate `A.bam` - `snakemake --cores 1 mapped_reads/A.bam`
2. Dry run of A.bam - `snakemake -np mapped_reads/A.bam`
3. Using `snakefmt` to format the code - `snakefmt --check`
4. Dry run of the entire workflow - `snakemake -n`
5. Full workflow runs - `snakemake --cores 2`
6. Bonus: Tests pass - `pytest`
