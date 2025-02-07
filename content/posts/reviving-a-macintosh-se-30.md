---
title: Reviving a Macintosh SE/30
date: 2022-07-17
tags:
  - retrocomputing
---

[Back in February, I acquired a Macintosh SE/30](/posts/a-new-used-macintosh-se-30). It was in need of a bit of work, and I finally got around to making all the repairs.

The first order of business was to use some cyanoacrylate glue to repair the crack in the front of the case. That had to be the first step because I didn't want the crack to spread any further.

The next step was to desolder all the electrolytic capacitors from the logic board and replace them with new ones, using tantalum capacitors where possible. On the analog board, I recapped with newer electrolytic capacitors. Fortunately, there are so many online resources for this type of repair, like [Recap-a-Mac](https://recapamac.com.au/macintosh-se-30/).

The only stumbling block I encountered was one of the capacitors on the analog board. C15 is a 3.9uF 35V bipolar capacitor, which I couldn't find anywhere.

![A capacitor on the Macintosh SE/30 analog board.](se30-analog-capacitor-original.jpg)

I ended up ordering a film capacitor from Mouser that had close enough specs. Unfortunately, the leads were too short, so I had to solder a wire to one leg of the capacitor to get it to fit.

![A capacitor on the Macintosh SE/30 analog board with a wire soldered to one leg.](se30-analog-capacitor-replacement.jpg)

The rest of the recapping was pretty straightforward. I desoldered each capacitor, cleaned the solder pads, and installed the its replacement.

Capacitors removed:

![A Macintosh SE/30 logic board with all the capacitors removed.](se30-logic-board-capacitors-removed.jpg)

New capacitors installed:

![A Macintosh SE/30 logic board with all the new capacitors installed.](se30-logic-board-new-capacitors.jpg)

Well, it's not the best solder job but it'll do the trick:

![A closeup of a solder joint on a Macintosh SE/30 logic board.](se30-new-capacitor-closeup.jpg)

After soldering in all the new capacitors, I gave the logic and analog boards a good scrubbing and rinsing with 99.9% isopropyl alcohol to get all the flux out and left them to dry overnight.

All the old capacitors:

![A pile of old capacitors.](se30-old-capacitors.jpg)

I also encountered a molex connector that was burnt out.

![A molex connector with two of its leads burnt out.](se30-burnt-molex.jpg)

It was difficult to remove that burnt connector because it seemed to have fused to the wire on the inside. I didn't want to cut off too much of the wire since it was already fairly short. After a lot of prying, I finally got it off and was able to install a new connector.

![A new molex connector.](se30-new-molex.jpg)

With everything in place, I started up the machine and it booted smoothly into System 7.1! The screen now looked much better, albeit with the picture looking slightly warped. I adjusted the screen a little bit by manipulating the yoke, but I didn't want to go too far since it's a delicate piece of equipment and there was a good chance I could make it worse.

![The screen of a Macintosh SE/30 showing flying toasters.](se30-flying-toasters.jpg)
