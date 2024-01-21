---
title: "Energy loads forecast"
excerpt: "TODO"
permalink: /docs/forecast/
number: 2
header:
#   image: /assets/images/unsplash-gallery-image-1.jpg
  teaser: /assets/images/blog/pinn.png
---

**Stack:** 
{: .notice--info}

This is a machine learning project carried out in collaboration with an in Italian startup in the energy sector, 
working on algorithms to optimize the energy consumption of factories and large buildings.

The main goal is to forecast the energy consumption of different real-world loads coming from building facilities 
such as ventilation systems, lighting etc. We use different methods to assess the quality of the forecasting, with 
a special attention on the performance side since the algorithm might also run on edge devices. The techniques used 
go from basic exponential smoothing to more comolex XGboost and RNN-based algorithms with a smart model ensemble 
system under the hood (not open sourced). 

Some (but not all) additional information can be found on the blog post. A complete version of the project has been 
deployed in production; I am not sure if it still is, though.