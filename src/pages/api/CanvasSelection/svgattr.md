---
title: 'SVG Attributes'
docs: ['CanvasSelection.svgattr']
---

Using SVG attributes to change background color:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.svgattr('style', 'background-color: #444444')
    
    canvas.nodes([1, 2, 3]).add().color('white')
      .label().color('black')
    
    canvas.edges([[1, 2], [2, 3], [3, 1]]).add().color('white')
  python: |
    canvas.svgattr('style', 'background-color: #444444')
    
    canvas.nodes([1, 2, 3]).add().color('white')
      .label().color('black')
    
    canvas.edges([(1, 2), (2, 3), (3, 1)]).add().color('white')
</data>
