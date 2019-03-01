---
title: 'SVG Attributes'
docs: ['EdgeSelection.svgattr']
---

Using SVG attributes to create a dashed edge:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.nodes([1, 2, 3, 4, 5, 6]).add()
    canvas.edges([[1, 2], [1, 3], [2, 3],
      [4, 5], [4, 6], [5, 6]]).add()
    
    canvas.edge([1, 4]).add()
      .svgattr('stroke-dasharray', '4')
  python: |
    canvas.nodes([1, 2, 3, 4, 5, 6]).add()
    canvas.edges([(1, 2), (1, 3), (2, 3),
      (4, 5), (4, 6), (5, 6)]).add()
    
    canvas.edge((1, 4)).add() \
      .svgattr('stroke-dasharray', '4')
</data>
