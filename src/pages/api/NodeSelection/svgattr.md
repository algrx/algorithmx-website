---
title: 'SVG Attributes'
docs: ['NodeSelection.svgattr']
---

Using SVG attributes to create outlines:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.nodes([1, 2, 3, 4]).add()
      .color('blue')
      .svgattr('stroke-width', '3')
      .svgattr('stroke', 'lightblue')
    
    canvas.edges([[1, 2], [2, 3], [3, 4],
      [4, 1], [1, 3], [2, 4]]).add().color('lightblue')
  python: |
    canvas.nodes([1, 2, 3, 4]).add() \
      .color('blue') \
      .svgattr('stroke-width', '3') \
      .svgattr('stroke', 'lightblue')
    
    canvas.edges([(1, 2), (2, 3), (3, 4),
      (4, 1), (1, 3), (2, 4)]).add().color('lightblue')
</data>
