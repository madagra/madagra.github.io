---
title: "QUBEC"
excerpt: "[QC] A platform on AWS for performing quantum chemistry simulations
on quantum computers integrated with a widely used chemical modeling interface."
permalink: /docs/qubec/
number: 4
header:
  overlay_image: /assets/images/qubec.jpg
  show_overlay_excerpt: false
  teaser: /assets/images/blog/qubec.jpg
---

**Stack:** Python, FastAPI, Terraform, AWS cloud
{: .notice--info}

Quantum chemistry simulations are one of the most promising applications of quantum computing, as 
initially pointed out by Feynman in his famous paper where the concept of a quantum computer was introduced.

QUBEC is a cloud platform for executing complex chemistry simulations on publicly available quantum computers 
without the need for extensive knowledge in the domain. Thanks to the help of our partner Schrodinger, this platform 
has been interfaced with popular software for modeling chemical systems.

Contribution: I started the platform from zero working on both the cloud infrastructure and high availability and the 
quantum algorithms running under the hood.

More information can be found in [this blog](https://aws.amazon.com/blogs/quantum-computing/quantum-chemistry-with-qucos-qubec-on-amazon-braket/) 
written in collaboration with AWS. The platform is now integrated with the 
PASQAL cloud services and will soon be publicly available to clients 
around the world. 