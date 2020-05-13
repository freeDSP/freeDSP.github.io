---
layout: post
author: FreeDSP
title: freeDSP Expansion Board - USB x2
---


This project is based on a PSoC5LP development kit and currently does not have a custom PCB. The provided firmware streams stereo signals into the FreeDSP I2S input. The module has only been tested with the FreeDSP Classic. However, since it is in the transmission of an I2S signal, it can be assumed that use (possibly with small changes) with the other FreeDSP boards is possible. The PSoC5, which is used for the USB to I2S conversion of the audio stream, is a mixture of a microcontroller and an FPGA. The PSoC5 used for this purpose has a 32-bit processor ARM Cortex-M3. The PSoC is both powerful and very flexible usable and therefore ideally suited for this application. Programming of the PSoC is done through the Cypress provided software PSoCs Creator and is done in C. The program is based in part on sample code that has been rewritten and combined for this application.

<ul>
<li>Status: Tested</li>
<li>Integrated Chips: PSoC5LP Development Board</li>
<li>Input: USB</li>
<li>Output: I&sup2;S</li>
<li>License: UNKNOWN</li>
<li>Documentation: <a href="https://docs.google.com/document/d/13oAXWgiXSXEbWXAHb1hUmKvv9-sQnAzZGHgO0yWrQ98/edit?usp=sharing" target="_blank" rel="noopener">Getting Started (only German)</a></li>
<li>Firmware/Software: <a href="https://github.com/freeDSP/freeDSPx-USB-x2" target="_blank" rel="noopener">Source</a></li>
<li>Cost: Cypress devboard 10 &euro;</li>
</ul>
