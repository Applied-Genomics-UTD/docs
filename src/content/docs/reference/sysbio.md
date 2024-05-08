---
title: Sysbio
description: Biology Department Training Cluster
---

# Logging into Sysbio

Just to check that everyone has access and get any issues out of the way!

## Connecting Remotely

Utilize the UTD VPN Service:

- [OIT support link](https://www.utdallas.edu/oit/vpn/)
- Enroll in NetIDplus
- Install the Cisco AnyConnect VPN Software
- Connect to the Cisco AnyConnect VPN System

### Login using Remote-SSH

<!-- TODO Add screenshot -->

0. Click the green button
1. Connect to Host...
2. Select `Add new ssh host`
3. `ssh <netid>@sysbio.utdallas.edu` (Or see [this guide to
   connect](https://oit.utdallas.edu/helpdesk/kb/?id=9472349b881c17a0a06f1944a4adda29f9761a1dc8)
   to `giant.utdallas.edu` if we haven't gotten accounts on sysbio yet)
4. Select `Linux` as the OS of the remote host
5. Password is your usual UTD password
6. Open up a terminal `Ctrl+Shift+~`
7. `sinfo` or `ls`

:::caution

If you're on windows you may need to follow if you're getting an error about
[vscode remote connection error the process tried to write to a nonexistent
pipe](https://stackoverflow.com/questions/60335069/vscode-remote-connection-error-the-process-tried-to-write-to-a-nonexistent-pipe),
you need to set your ssh config manually.

:::

### Other Connection options

There are plenty of other ways to login remotely. Here are some alternatives for you to play around with:

Windows:
- [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab)
- [Mobaxterm](https://mobaxterm.mobatek.net/)

MacOS:

- [iTerm2](https://iterm2.com/downloads.html)


# Biostars

[Biostar Handbook: 8. Installing on a Computer Cluster](https://www.biostarhandbook.com/cluster-setup.html#cluster-setup)

You'll need to run and go through the prompts

```sh
curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh

conda config --add channels defaults
conda config --add channels bioconda
conda config --add channels conda-forge

curl http://data.biostarhandbook.com/install/conda.txt | xargs conda create -n biostars -q -y
```

### Update prompt

```sh
curl http://data.biostarhandbook.com/install/bashrc.txt >> ~/.bashrc
curl http://data.biostarhandbook.com/install/bash_profile.txt >> ~/.bash_profile
```
