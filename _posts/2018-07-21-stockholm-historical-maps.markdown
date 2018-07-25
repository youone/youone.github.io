---
layout: post
title: Stockholm Layers
date: 2018-07-21 13:32:20 +0300
description: A web app showing historical maps of Stockholm layered on top of a modern one
img: stockholm_historical_maps/1642.png # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Stockholm, Maps]
show: true
---
I have made a little app where you can see some famous historical maps of stockholm as transparent layers on top of a modern satellite map. It is a result of my slight obsession with maps and fascination with the the gradual changes that cities undertake with time. 

The most remarkable map is probably the one from 1642. It is beautifully painted, and it does not actually show exactly what Stockholm looked like at this point, but rather is a plan of the future city. Before the 1640s the street grid in Stockholm was a mid-eval type with with a total lack of urban planning (hence not a "grid" at all). The grid that war laid out at this point is however the same that is still present as can easily be seen in the app.

As you can see the edges are not straight an the streets are a bit curved at some places in the historical overlay. This is because I use an online "warping" program (https://mapwarper.net) to stretch and rotate the map while constraining it to be accurate at certain known fix-points like churches, rocks or other old buildings. This needs to be done since the older maps contains lots of errors regarding distances and angles due to to the more primitive cartographic methods used in those days. A plain overlay without warping does simply not work good enough for a direct overlay to be useful. 