---
title: "TurboRVB"
excerpt: "[HPC] Scientific software package for performing accurate simulations of molecules and 
materials with extreme performance and efficient parallelization."
permalink: /docs/turborvb/
number: 1
header:
  overlay_image: /assets/images/turborvb.jpg
  show_overlay_excerpt: false
  teaser: /assets/images/blog/turborvb.jpg
---

**Stack:** Fortran, C++, parallelization with MPI (distributed memory) and OpenMP (shared memory).
{: .notice--info}

TurboRVB is a scientific software package written mainly in Fortran for performing highly 
accurate and efficient simulations of molecules and solid materials from first principles, 
which means by solving directly the Schrodinger equation describing the quantum system under study. 
TurboRVB implements quantum Monte Carlo, a set of simulation techniques which can be 
executed highly efficiently on the largest super computers in the world.

During my PhD, my main contribution was the code for computing the properties of solids (i.e. 
periodic materials) combined with several efficient parallelization schemes to enable large-scale
calculations.

After more than 10 years of development, TurboRVB is now an open-source project which 
can be found on [GitHub](https://github.com/sissaschool/turborvb). A few years ago, we published 
a [review paper](https://arxiv.org/abs/2002.07401) with a detailed description of its features and
performance.

**More on Quantum Monte Carlo**

Quantum Monte Carlo is one of the most promising techniques for simulating molecules and materials
which can compute properties with higher accuracy than other methods (in technical terms, QMC is 
a *highly correlated* method). In a nutshell, QMC uses classical Monte Carlo techniques for
computing a direct solution of the Schrodinger equation which fully describes all the properties
of any quantum system. Thanks to the Monte Carlo component, QMC is highly parallelizable and it
can [run efficiently](https://pubs.aip.org/aip/jcp/article-abstract/142/14/144111/898445/Ab-initio-molecular-dynamics-simulation-of-liquid?redirectedFrom=fulltext) 
on the largest supercomputers in the world. Furthermore, thanks to its high accuracy, it can be
applied to the study of some of the most complex phenomena in chemistry and materials science such
as [high-temperature superconductors](https://arxiv.org/abs/1302.4748), 
[hydrogen under high pressure](https://www.nature.com/articles/ncomms4487) and many more.
