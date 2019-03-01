---
title: 'Edge Lengths'
docs: ['CanvasSelection.edgelengths']
---

Short Jaccard edge lengths:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.edgelengths(['jaccard', 40])
    
    canvas.nodes([1, 2, 3, 4, 5]).add()
    canvas.edges([[1, 2], [2, 3], [3, 4],
      [2, 4], [1, 4], [1, 5], [4, 5]]).add()
  python: |
    canvas.edgelengths(('jaccard', 40))
    
    canvas.nodes([1, 2, 3, 4, 5]).add()
    canvas.edges([(1, 2), (2, 3), (3, 4),
      (2, 4), (1, 4), (1, 5), (4, 5)]).add()
</data>

Long Symmetric edge lengths:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.edgelengths(['symmetric', 100])
    
    canvas.nodes([1, 2, 3, 4, 5]).add()
    canvas.edges([[1, 2], [2, 3], [3, 4],
      [2, 4], [1, 4], [1, 5], [4, 5]]).add()
  python: |
    canvas.edgelengths(('symmetric', 100))
    
    canvas.nodes([1, 2, 3, 4, 5]).add()
    canvas.edges([(1, 2), (2, 3), (3, 4),
      (2, 4), (1, 4), (1, 5), (4, 5)]).add()
</data>

Individual edge lengths:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.edgelengths('individual')
    
    canvas.nodes([1, 2, 3, 4, 5]).add()
    canvas.edges([[1, 2], [2, 3], [3, 4], [2, 4]]).add()
    
    canvas.edge([1, 4]).add().length(50)
      .label().add().text(50)
    canvas.edge([1, 5]).add().length(100)
      .label().add().text(100)
    canvas.edge([4, 5]).add().length(80)
      .label().add().text(80)
  python: |
    canvas.edgelengths('individual')
    
    canvas.nodes([1, 2, 3, 4, 5]).add()
    canvas.edges([(1, 2), (2, 3), (3, 4), (2, 4)]).add()
    
    canvas.edge((1, 4)).add().length(50) \
      .label().add().text(50)
    canvas.edge((1, 5)).add().length(100) \
      .label().add().text(100)
    canvas.edge((4, 5)).add().length(80) \
      .label().add().text(80)
</data>
