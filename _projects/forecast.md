---
title: "Forecasting energy consumption"
excerpt: "[ML] Apply time-series forecasting techniques for real-time
forecasting of the energy consumption of loads in buildings and factories."
permalink: /docs/forecast/
number: 2
header:
#   image: /assets/images/unsplash-gallery-image-1.jpg
  teaser: /assets/images/blog/pinn.png
---

**Stack:** Python, scikit-learn, PyTorch
{: .notice--info}

This is a machine learning project carried out in collaboration with an in Italian startup in the energy sector, 
working on algorithms to optimize the energy consumption of factories and large buildings.

The main goal is to forecast the energy consumption of different real-world loads coming from building facilities 
such as ventilation systems, lighting etc. We use different methods to assess the quality of the forecasting, with 
a special attention on the performance side since the algorithm might also run on edge devices. The techniques used 
go from basic exponential smoothing to more comolex XGboost and RNN-based algorithms with a smart model ensemble 
system under the hood (not open sourced). 

Some additional information covering the basics of the project 
can be found on [this post](https://medium.com/towards-data-science/ml-time-series-forecasting-the-right-way-cbf3678845ff). 
A complete version of the project has been 
deployed in production; however, I am not sure if it still is as of today.