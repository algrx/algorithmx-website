---
title: 'Flip'
docs: ['EdgeSelection.flip']
---

Prevent edges from 'flipping' when upside-down, allowing labels to maintain their position and orientation:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.nodes([1, 2, 3, 4, 5]).add()
    
    const initEdges = canvas.edges([
      [1, 2], [2, 3], [3, 4], [4, 5], [5, 1]]).add()
    
    initEdges.flip(false)
    initEdges.label(1).add().text('inner')
    initEdges.label(2).add().text('outer')
  python: |
    canvas.nodes([1, 2, 3, 4, 5]).add()
    
    init_edges = canvas.edges([
      (1, 2), (2, 3), (3, 4), (4, 5), (5, 1)]).add()
    
    init_edges.flip(False)
    init_edges.label(1).add().text('inner')
    init_edges.label(2).add().text('outer')
</data>
