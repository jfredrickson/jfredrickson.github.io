---
title: Macintosh file type and creator data
tags:
  - retrocomputing
---

Sometimes when transferring a file from a modern computer to a classic Macintosh (e.g., System 7), its [resource fork](https://en.wikipedia.org/wiki/Resource_fork) disappears into the great aether for certain reasons. As a result, the Mac doesn't know what type of file it is and can't open it. Specifically, the OS needs to know the `Type` and `Creator` metadata that was stored in the resource fork.

To correct a missing resource fork, use [ResEdit](https://macintoshgarden.org/apps/resedit). But what are the correct `Type` and `Creator` entries? That's where this table hopefully comes in handy!

{{< datatable "macintosh-resource-forks" >}}
