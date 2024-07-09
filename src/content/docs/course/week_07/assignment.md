---
title: Downstream ChIP-seq Analysis
# TODO
description: Peaks
sidebar:
  order: 10
  badge:
    text: Lab
---

1. Perform motif analysis on the MysteryFactorX Regions
2. Visualize the Peaks in IGV
3. Combine the Mystery Peaks with Peaks from Mikkelsen '07
4. What TF is the MysteryFactorX associated with?

## Data

- [nf-core/chipseq results for Data from Mikkelsen 2007](https://huggingface.co/datasets/funlab/mikkelsen_2007)
- [MysteryFactorX Regions](https://huggingface.co/datasets/funlab/applied-genomics/resolve/main/chipseq/MysteryFactorX_ChIPseq_mm10.bed)

## Useful Docs

- [nf-core/chipseq 2.0.0](https://nf-co.re/chipseq/2.0.0/docs)

:::tip
`-meme-maxw` and `-meme-minw` have been replaced by`-maxw` and `-minw`
:::
