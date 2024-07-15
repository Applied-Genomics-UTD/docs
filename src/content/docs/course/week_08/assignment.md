---
title: Intro to ATAC-seq
description: Assignment using Galaxy to process ATAC-Seq data and analyze it
sidebar:
  order: 10
  badge:
    text: Lab
---

https://training.galaxyproject.org/training-material/topics/epigenetics/tutorials/atac-seq/tutorial.html

Run MultiQC on all the whole thing and submit that through eLearning

Redo the analysis with nf-core/atac-seq

https://zenodo.org/record/3862793/files/ENCFF933NTR.bed.gz

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

```sh
nextflow run nf-core/atacseq -r 2.1.2 -profile utd_ganymede -params-file nf-params.json -resume
```

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
	author = {Saskia Hiltemann and Helena Rasche and Simon Gladman and Hans-Rudolf Hotz and Delphine Larivi{\`{e}}re and Daniel Blankenberg and Pratik D. Jagtap and Thomas Wollmann and Anthony Bretaudeau and Nadia Gou{\'{e}} and Timothy J. Griffin and Coline Royaux and Yvan Le Bras and Subina Mehta and Anna Syme and Frederik Coppens and Bert Droesbeke and Nicola Soranzo and Wendi Bacon and Fotis Psomopoulos and Crist{\'{o}}bal Gallardo-Alba and John Davis and Melanie Christine Föll and Matthias Fahrner and Maria A. Doyle and Beatriz Serrano-Solano and Anne Claire Fouilloux and Peter van Heusden and Wolfgang Maier and Dave Clements and Florian Heyl and Björn Grüning and B{\'{e}}r{\'{e}}nice Batut and},
	editor = {Francis Ouellette},
	title = {Galaxy Training: A powerful framework for teaching!},
	journal = {PLoS Comput Biol} Computational Biology}
}
```
