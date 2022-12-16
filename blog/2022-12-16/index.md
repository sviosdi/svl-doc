---
slug: C'est parti!
title: Lancement
authors: [sviosdi]
tags: [sl, signal, slot]
---

![Signaux&Slots](/img/sig.webp)
Premier post de la documentation du code pour les signaux et les slots en C++.
Aucune librairie tierce n'est nécessaire. Seule la _stl_ est utilisée.

Le mécanisme de signaux et de slots permet de connecter un `signal` (qui est une fonction un peu particulière) à un `slot` qui est une fonction globale ou une méthode d'une classe, mais ayant les mêmes paramètres que le signal. À chaque `émission` du signal (qui correspond à l'appel de la fonction signal avec ses paramètres s'il y en a) le slot connecté est effectué avec les paramètres transmis par le signal.
