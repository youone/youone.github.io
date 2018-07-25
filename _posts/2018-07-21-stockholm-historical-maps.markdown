---
layout: post
title: Stockholm Layers
date: 2018-07-21 13:32:20 +0300
description: A web app showing historical maps of Stockholm layered on top of a modern one
img: stockholm_historical_maps/1642.png # Add image post (optional)
fig-caption: Stockholm map from 1642
tags: [Stockholm, Maps]
show: true
---
Made a little [**web-app**](/layers/index.html) where you can see two famous historical maps of Stockholm as transparent layers on top of a modern satellite map (the app is embedded below, but use the link if the screen is too narrow). Select which overlay to show in the top right menu and change the transparency with the slider. Zoom and pan with the familiar gestures.

The most remarkable map is probably the one from 1642. It is absolutely beautifully painted with an almost modern feel to it. It does not actually show what Stockholm looked like at this point, but rather is a plan for the future city. Before the 1640s the street grid in Stockholm was of mid-eval type with a total lack of urban planning (hence not a "grid" at all). The grid that was laid out at this point is however almost the same as the one is still present as can easily be seen in the app.

As you can see the edges are not straight and the streets are a bit curved at some places in the historical overlays. This is because I use an online "warping" program ([mapwarper.net](https://mapwarper.net)) to stretch and rotate the map while constraining it to be accurate at certain known fix-points like churches, rocks or other old buildings. This needs to be done since the older maps contains lots of errors regarding distances and angles due to to the more primitive cartographic methods used in those days. A plain overlay without warping simply does not work good enough for a direct overlay to be useful. 

<iframe style="width:100%; height:500px; border:0" src="/layers/index.html"></iframe>