---
title: 'SVG Attributes'
docs: ['ElementSelection.svgattr']
---

Use SVG attributes to change the background color:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.duration(0).svgattr('style', 'background-color: #444444')
    
    canvas.nodes([1, 2, 3]).add({
        color: 'white',
        labels: { 0: { color: 'black' } }
    })
    
    canvas.edges([[1, 2], [2, 3], [3, 1]]).add().color('white')
  python: |
    canvas.duration(0).svgattr('style', 'background-color: #444444')
    
    canvas.nodes([1, 2, 3]).add(
        color='white',
        labels={0: {'color': 'black'}}
    )
    
    canvas.edges([(1, 2), (2, 3), (3, 1)]).add().color('white')
</data>
