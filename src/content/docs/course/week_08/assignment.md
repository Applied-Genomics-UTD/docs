---
title: ATAC-Seq Data Analysis
description: Assignment using Galaxy to process ATAC-Seq data and analyze it
sidebar:
  order: 10
  badge:
    text: Lab
---

## [GitHub Classroom Assignment](https://classroom.github.com/a/rcWXA7Je)

## ATAC-Seq Data Analysis Galaxy Tutorial

[Tutorial](https://training.galaxyproject.org/training-material/topics/epigenetics/tutorials/atac-seq/tutorial.html)[^1]

In addition to the steps in the tutorial, run MultiQC on the FastQC results.

###  Criteria

In the end you should commit/upload to GitHub

1. MultiQC Report with FastQC
2. Heatmap for Genes
3. Heatmap for CTCF peaks
4. pyGenomeTracks

Link to them in the README

## nf-core/atacseq

Redo the analysis using nf-core in a GitHub codespace

<!-- https://zenodo.org/record/3862793/files/ENCFF933NTR.bed.gz -->

```csv title="samplesheet.csv"
sample,fastq_1,fastq_2,replicate
chr22_enriched,https://zenodo.org/record/3862793/files/SRR891268_chr22_enriched_R1.fastq.gz,https://zenodo.org/record/3862793/files/SRR891268_chr22_enriched_R2.fastq.gz,1
```

```json title="nf-params.json"
{
  "input": "samplesheet.csv",
  "outdir": "results",
  "read_length": 50,
  "fasta": "https://hgdownload.cse.ucsc.edu/goldenpath/hg38/chromosomes/chr22.fa.gz",
  "gtf": "https://hgdownload.soe.ucsc.edu/goldenPath/hg38/bigZips/genes/hg38.ncbiRefSeq.gtf.gz",
  "aligner": "bowtie2",
  "max_cpus":   4,
  "max_memory": "14.GB",
  "max_time":   "6.h"
}
```

```sh title="Run nf-core/atacseq"
nextflow run nf-core/atacseq -r 2.1.2 -profile docker -params-file nf-params.json -resume
```

### Criteria

1. Upload the MultiQC report to GitHub
2. Upload the plot at  `results/bowtie2/merged_library/deeptools/plotprofile/chr22_enriched_REP1.mLb.clN.scale_regions.plotHeatmap.pdf`

[^1]: Lucille Delisle, Maria Doyle, Florian Heyl, ATAC-Seq data analysis (Galaxy Training Materials). https://training.galaxyproject.org/training-material/topics/epigenetics/tutorials/atac-seq/tutorial.html Online; accessed Mon Jul 15 2024 
