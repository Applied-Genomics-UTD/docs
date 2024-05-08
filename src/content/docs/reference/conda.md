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


### `environment.yml` Tutorial

So now that we've gotten familiar with some tools it's time to get some

computations running! But we don't have admin access to the system we're on so
how do we install software? Enter conda

#### Create an env file

Let's create an environment file to share with our collaborators, so they can
rebuild our conda environment from scratch.[^1]

```bash
cd ag-intro
conda env export --no-builds > env.yaml
```

Open up `env.yaml` and poke around.

Commit the `env.yaml` file.

#### Update the README

Our collaborators need to know how to build the enviroment from scratch. In the
README update the "Getting Started" commands to

```diff title="README.md"
git clone https://github.com/emiller88/ag-intro
cd ag-intro
+ conda env create --name=more-map-and-call --file=env.yaml
+ conda activate aligners
make
```

Commit the changes to the README.

#### Add a new make rule to build the conda environment

We can refactor our project to make the initial setup even cleaner, and future proof it if we wanted to change the way we install the conda env.

Let's add a new make rule

```diff title="Makefile"
+ conda_env:
+   conda env create --name=more-map-and-call --file=env.yaml
```

And update the "Getting Started" commands.

```diff title="README.md"
git clone https://github.com/emiller88/ag-intro
cd ag-intro
+ make conda_env
- conda env create --name=more-map-and-call --file=env.yaml
conda activate aligners
make
```

Commit the changes to those as well.

# Further Reading

- [Bioconda Common Pitfalls](https://bioconda.github.io/tutorials/gcb2020.html#common-pitfalls)

[^1]: [Conda environments – common commands](https://bioconda.github.io/tutorials/gcb2020.html#id1)
