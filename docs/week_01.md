---
id: week-1
title: Environment Setup
description: ''
sidebar_label: 'Week 1'
sidebar_position: 1
---

# Environment Setup

## This is not a programming class; this is a “workflows” class

<!-- TODO Remove the questioning -->

## Why reproducible Research?

To reduce wasted resources.

### Computing

- Use the right tool for the job.
- Running computational intensive things on your laptop is too little.
- Running jobs that are precise wastes compute time in the cluster that you or
  someone else could be using for other things.

### Money

Funding runs out. Waiting for results to come back, or reproducing old results
requires time of highly trained individuals, which is expensive.

### Time

Save time for your future self, and for researchers who come after you.

- What if you're about to graduate and your hard-drive dies(The results are too
  large for a backup on a usb)? How quickly could you reproduce that work?
- How would you work with a new undergraduate in your lab?
  - How would they make substantial contributions?
  - How would could you trust them to work on your research without fear that
    they may break something?
- When you go to write a manuscript, how would you share your code?

<!-- TODO Remove the questioning -->

## How are we going to be more Reproducible?

- Avoiding homegrown solutions, instead favoring community curated efforts
- Documentation
- Version Control
- Utilizing build systems

## How big of a problem is this?

[Awesome Reproducible
Research](https://github.com/leipzig/awesome-reproducible-research)

## Logging into Sysbio

Just to check that everyone has access and get any issues out of the way!

### Connecting Remotely

Utilize the UTD VPN Service:

- [OIT support link](https://www.utdallas.edu/oit/vpn/)
- Enroll in NetIDplus
- Install the Cisco AnyConnect VPN Software
- Connect to the Cisco AnyConnect VPN System

### Setting up [VS Code](https://code.visualstudio.com/)

1. Select the [correct install for your
   platform](https://code.visualstudio.com/#alt-downloads)
2. Install
   <!-- TODO Add screenshot -->
3. Search in extensions for `Functional Genomics`

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

There are plenty of other ways to login remotely. Here are some alternatives for you to play around with:

Windows:

- [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab)
- [Mobaxterm](https://mobaxterm.mobatek.net/)

MacOS:

- [iTerm2](https://iterm2.com/downloads.html)

## Intro to Unix

Practical Research Computing Unix Lecture [^1]

### Some basic commands

You don't need to make flashcards to memorize them. Luckily if you're at a
command line, you probably have access to a search engine, and what they do or
what they were is just a search away.

We're going to run through [The Missing Semester: The
Shell](https://missing.csail.mit.edu/2020/course-shell/) together.

# Assignment 1

[Create a GitHub account](https://github.com/join) and submit your username
through elearning.

[^1]: [Practical Research Computing Unix Lecture](/practical-research-computing/02-unix.pdf)
[^2]: [The Missing Semester: The Shell](https://missing.csail.mit.edu/2020/course-shell/)
