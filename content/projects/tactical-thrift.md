---
title: Tactical Thrift
description: A TSP investment model
links:
  - text: Tactical Thrift
    href: http://tactical-thrift.herokuapp.com/
  - text: GitHub repository
    href: https://github.com/jfredrickson/tactical-thrift
tags:
  - nodejs
  - express
  - responsive-design
  - mongodb
  - heroku
---

An Express web app demonstrating a [Thrift Savings Plan](https://www.tsp.gov/) investment model based on Mebane Faber's paper, [A Quantitative Approach to Tactical Asset Allocation](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=962461). Faber describes an investment system that is based on comparing the current price of a fund to the 10-month simple moving average (SMA) of that fund, and making a buy/sell decision based on that comparison.

The app pulls fund data from the Thrift Savings Plan website and computes an investment position.
