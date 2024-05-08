---
title: Conda
description: Reproducibility™️
---

I feel like I'm always explaining to someone the magic incantations performed to get a Conda environment to work. That person is usually myself.

# Installation

## Miniforge

Easiest way I've found to consistently install conda:

```bash
curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

[Official docs](https://github.com/conda-forge/miniforge#install)

That's for "Unix-like platforms (Mac OS & Linux)".

If you're using windows and not using WSL2, first what are you doing with your life? Second, follow the official docs.

## Setting up Bioconda

```bash
conda config --add channels defaults
conda config --add channels bioconda
conda config --add channels conda-forge
conda config --set channel_priority strict
```

[Official Docs](https://github.com/conda-forge/miniforge#install). Follow them.

# Opinions

## Mamba

It's [a drop-in replacement](https://mamba.readthedocs.io/en/latest/user_guide/mamba.html#mamba-vs-conda-clis) for Conda.

## Creating environments

Use an `environment.yml` file.

```yaml
name: bwa_mem
channels:
  - conda-forge
  - bioconda
  - defaults
dependencies:
  - bwa=0.7.17
  # renovate: datasource=conda depName=bioconda/samtools
  - samtools=1.18
```

[Bioconda Docs on environment files](https://bioconda.github.io/tutorials/gcb2020.html#id2)

`mamba create` in the project directory should create environment for you.

