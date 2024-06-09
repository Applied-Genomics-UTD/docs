---
title: ChIP-Seq Pre-lab
description: Stuff Edmund took care of before the lab to save time
sidebar:
  order: -1
---

The [original paper](https://www.nature.com/articles/nature06008) doesn't list where the data is hosted.

Went on [SRA Explorer](https://sra-explorer.info/#) and searched the papers title. Opened up the Accession number of one of the samples([SRR006786](https://www.ncbi.nlm.nih.gov/sra/?term=SRR006786))

Found the _study_ accession number([PRJNA113703](https://www.ncbi.nlm.nih.gov/bioproject/PRJNA113703)) from that page.

Went to [SRA Run Selector](https://trace.ncbi.nlm.nih.gov/Traces/study/) and searched the study accession number. Downloaded the Accession List:

::: tip

Checkout [NCBI Minute: Using the SRA RunSelector to Find NGS Datasets](https://www.youtube.com/watch?v=Ww_OTe3M_94) for a visual guide!

:::

```txt
SRR006786
SRR006787
SRR006789
SRR006792
SRR006793
SRR006797
SRR006799
SRR006805
SRR006806
SRR006813
SRR006814
SRR006815
SRR006816
SRR006817
SRR006818
SRR006822
SRR006823
SRR006824
SRR006825
SRR006828
SRR006829
SRR006830
SRR006831
SRR006832
SRR006835
SRR006836
SRR006837
SRR006838
SRR006848
SRR006849
SRR006888
SRR006889
SRR007333
SRR007334
SRR007425
SRR007426
SRR007427
SRR007428
SRR007429
SRR007430
SRR007431
SRR007432
SRR007433
SRR007434
SRR007435
SRR007436
SRR007437
SRR007438
SRR007439
SRR007440
SRR007441
SRR007442
SRR007443
SRR007444
```

The Metadata is also in the `SraRunTable.txt`

## Preparing the samplesheet

https://nf-co.re/chipseq/dev/docs/usage#multiple-replicates

::: tip
embryonic stem (ES) cells
neural progenitors 
embryonic fibroblasts
:::

[This file contains Supplementary Table 1 which includes the list of datasets analyzed. (XLS 15 kb)](https://static-content.springer.com/esm/art%3A10.1038%2Fnature06008/MediaObjects/41586_2007_BFnature06008_MOESM454_ESM.xls)

[This file contains Supplementary Table 3 which includes the list of analyzed promoters and their chromatin state in ES cells, neural progenitors and embryonic fibroblasts. (XLS 3206 kb)](https://static-content.springer.com/esm/art%3A10.1038%2Fnature06008/MediaObjects/41586_2007_BFnature06008_MOESM456_ESM.xls)


## Running

```
nextflow run nf-core/chipseq -r 2.0.0 -profile utd_ganymede -resume -params-file nf-params.json
```
