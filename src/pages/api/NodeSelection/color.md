---
title: 'Color'
docs: ['NodeSelection.color']
---

Pre-computed graph coloring:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.nodes([1, 2, 3, 4, 5, 6]).add()
    canvas.edges([[1, 2], [1, 3], [1, 6], [2, 3],
      [2, 4], [3, 5], [3, 6], [4, 5], [5, 6]]).add()
    
    const coloring = {
      1: 'red',
      2: 'blue',
      3: 'green',
      4: 'red',
      5: 'blue',
      6: 'yellow'
    }
    
    canvas.pause(0.5)
    for (let k in coloring) {
      canvas.node(k).color(coloring[k])
      canvas.node(k).highlight(0).size('1.2x')
      canvas.pause(0.5)
    }
  python: |
    canvas.nodes([1, 2, 3, 4, 5, 6]).add()
    canvas.edges([(1, 2), (1, 3), (1, 6), (2, 3),
      (2, 4), (3, 5), (3, 6), (4, 5), (5, 6)]).add()
    
    coloring = {
      1: 'red',
      2: 'blue',
      3: 'green',
      4: 'red',
      5: 'blue',
      6: 'yellow'
    }
    
    canvas.pause(0.5)
    for k in coloring:
        canvas.node(k).color(coloring[k])
        canvas.node(k).highlight(0).size('1.2x')
        canvas.pause(0.5)
</data>
