---
title: "Qadence"
excerpt: "[QC] Interface for building and executing quantum computing programs with a simple
interface and automatic differentiation via the integration with PyTorch."
permalink: /docs/qadence/
number: 2
header:
  overlay_image: /assets/images/qadence.jpg
  show_overlay_excerpt: false
  teaser: /assets/images/blog/qadence.jpg
---

**Stack:** Python, PyTorch, automatic differentiation, quantum computing.
{: .notice--info}

Qadence is a scientific software package, written mainly in Python, for building 
and executing quantum computing programs with a simple yet powerful interface. Qadence focuses 
on easiness to use, flexibility and performance by integrating with other open-source quantum 
computing simulators (such as [PyQTorch](https://github.com/pasqal-io/pyqtorch) to which I also contributed). 

<!-- ![image-left](/assets/images/qadence-logo.jpg){: .align-center}  -->

Qadence mainly targets applications in the (quantum) machine learning domain. Therefore, automatic
differentiation plays an integral role in its design. In particular, it extends 
the popular PyTorch deep learning framework making quantum program written in Qadence automatically 
differentiable by default by simply using PyTorch `autograd` differentiation engine.

Qadence was the resulting effort of over one year of work of my team at PASQAL. I was the main
driver behind this project, steering the project, contributing to the most important design
choices and implementations, and maintaining the roadmap for future of the package.

Qadence is now an open-source project which can be found on [GitHub](https://github.com/pasqal-io/qadence). We recently published a 
[review paper](https://arxiv.org/abs/2401.09915) with many details on its implementation and features.
