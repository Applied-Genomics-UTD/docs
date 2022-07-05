# Document Title

Replace

```sh
# Create a namespace for the tool
conda create --name macs python=2.7

# Activate the new environment.
source activate macs

# Install the tools.
conda install numpy
conda install macs2
```

with

```sh
conda create -n macs bioconda::macs2=2.2.7.1
```
