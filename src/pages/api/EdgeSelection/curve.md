---
title: 'Curve'
docs: ['EdgeSelection.curve']
---

Edges with various curve functions:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.nodes([1, 2, 3, 4, 5]).add()
      .pos((n, i) => [(i - 2) * 80, 0])
    
    const curves = [
      'linear',
      'natural',
      'bundle',
      'step'
    ]
    
    canvas.edges([[1, 2], [2, 3], [3, 4], [4, 5]]).add()
      .path([[-5, 5], [5, -5]])
      .data(curves).curve(c => c)
      .label().add().text(c => c).pos([0, 8])
  python: |
    canvas.nodes([1, 2, 3, 4, 5]).add() \
      .pos(lambda n, i: ((i - 2) * 80, 0))
    
    curves = [
      'linear',
      'natural',
      'bundle',
      'step'
    ]
    
    canvas.edges([(1, 2), (2, 3), (3, 4), (4, 5)]).add() \
      .path([(-5, 5), (5, -5)]) \
      .data(curves).curve(lambda c: c) \
      .label().add().text(lambda c: c).pos((0, 8))
</data>
