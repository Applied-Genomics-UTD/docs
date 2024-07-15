---
title: ATAC-Seq Data Analysis
description: Assignment using Galaxy to process ATAC-Seq data and analyze it
sidebar:
  order: 10
  badge:
    text: Lab
---

## ATAC-Seq Data Analysis Galaxy Tutorial

https://training.galaxyproject.org/training-material/topics/epigenetics/tutorials/atac-seq/tutorial.html

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
  "aligner": "bowtie2"
}
```

```sh title="Run nf-core/atacseq"
nextflow run nf-core/atacseq -r 2.1.2 -profile docker -params-file nf-params.json -resume
```

### Criteria

1. Upload the MultiQC report to GitHub
2. Upload the plot at  `results/bowtie2/merged_library/deeptools/plotprofile/chr22_enriched_REP1.mLb.clN.scale_regions.plotHeatmap.pdf`

```bibtex
@misc{epigenetics-atac-seq,
author = "Lucille Delisle and Maria Doyle and Florian Heyl",
	title = "ATAC-Seq data analysis (Galaxy Training Materials)",
	year = "",
	month = "",
	day = ""
	url = "\url{https://training.galaxyproject.org/training-material/topics/epigenetics/tutorials/atac-seq/tutorial.html}",
	note = "[Online; accessed Mon Jul 15 2024]"
}
@article{Hiltemann_2023,
	doi = {10.1371/journal.pcbi.1010752},
	url = {https://doi.org/10.1371%2Fjournal.pcbi.1010752},
	year = 2023,
	month = {jan},
	publisher = {Public Library of Science ({PLoS})},
	volume = {19},
	number = {1},
	pages = {e1010752},
	author = {Saskia Hiltemann and Helena Rasche and Simon Gladman and Hans-Rudolf Hotz and Delphine Larivi{\`{e}}re and Daniel Blankenberg and Pratik D. Jagtap and Thomas Wollmann and Anthony Bretaudeau and Nadia Gou{\''{o}}bal Gallardo-Alba and John Davis and Melanie Christine Föll and Matthias Fahrner and Maria A. Doyle and Beatriz Serrano-Solano and Anne Claire Fouilloux and Peter van Heusden and Wolfgang Maier and Dave Clements and Florian Heyl and Björn Grüning and B{\'{e}}r{\'{e}}nice Batut and},
	editor = {Francis Ouellette},
	title = {Galaxy Training: A powerful framework for teaching!},
	journal = {PLoS Comput Biol} Computational Biology}
}
```
