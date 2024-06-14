---
title: nf-core chipseq
description: How to run nf-core pipelines on a chipseq dataset
---

## Running the nf-core pipeline

[Let's refer to the usage section of the pipeline's docs](https://nf-co.re/rnaseq/dev/usage)

### Using the nf-core launcher

1. [Open up the nf-core launch utility](https://nf-co.re/launch?)
2. Select the `rnaseq` pipeline, `dev` for the version and click Launch
3. Fill out the following command-line flags:

   - profile: `utd_sysbio`
   - input: `samplesheet.csv`
   - email: `<netid>@utdallas.edu`
   - read_length: 50
   - genome: `hg19`

4. Create a file with the `nf-params.json` file it generates.

```json title="nf-params.json"
{
  "input": "samplesheet.csv",
  "read_length": 50,
  "outdir": "ming-results",
  "email": "<netid>@utdallas.edu",
  "genome": "hg19"
}
```

5. We're going to need to create a samplesheet. [Please refer to the usage section of the pipeline's docs](https://nf-co.re/chipseq/dev/usage)

The data has been predownloaded for you to the class scratch directory
`/scratch/applied-genomics/` under `chipseq/ming/`.

```csv title="samplesheet.csv"
sample,fastq_1,fastq_2,antibody,control
WT_YAP1,/scratch/applied-genomics/chipseq/ming/SRR1810900.fastq.gz,,YAP1,WT_INPUT
WT_H3K27ac,/scratch/applied-genomics/chipseq/ming/SRR949140.fastq.gz,,H3K27ac,WT_INPUT
WT_INPUT,/scratch/applied-genomics/chipseq/ming/SRR949142.fastq.gz,,,
```

:::tip
If you can't get the formatting right for whatever reason there's a backup samplesheet at `/scratch/applied-genomics/chipseq/ming/samplesheet.csv` just need to update the input path
:::

6. Start `screen` which is a screen manager

```bash
login$ screen
```

:::info
Useful screen commands
:::

```bash
# Start a new screen session:
screen

# Start a new named screen session:
screen -S session_name

# Reattach to an open screen:
screen -r session_name

# Detach from inside a screen:
    Ctrl + A, D

# Kill the current screen session:
    Ctrl + A, K
```

7. Launch the pipeline

```bash
nextflow run nf-core/chipseq -r dev -profile utd_sysbio -params-file nf-params.json
```

The pipeline should start up, and email you when it's finished!

While we're waiting let's check out the [shell script that would've ran all of that](https://www.biostarhandbook.com/ming-tangs-guide-to-chip-seq-analysis.html#shell-script-comes-to-rescue)
