---
title: 'Thickness'
docs: ['EdgeSelection.thickness']
---

Show a spanning tree using edge thickness:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.nodes([1, 2, 3, 4, 5, 6]).add()
    canvas.edges([[1, 3], [1, 6], [2, 3], [2, 4],
        [3, 4], [3, 5], [4, 5], [5, 6]]).add()
    
    canvas.pause(0.5)
    const spanningTree = [[1, 6], [5, 6], [3, 5], [2, 3], [2, 4]]
    canvas.edges(spanningTree).thickness(6).color('pink')
  python: |
    canvas.nodes([1, 2, 3, 4, 5, 6]).add()
    canvas.edges([(1, 3), (1, 6), (2, 3), (2, 4),
        (3, 4), (3, 5), (4, 5), (5, 6)]).add()
    
    canvas.pause(0.5)
    spanning_tree = [(1, 6), (5, 6), (3, 5), (2, 3), (2, 4)]
    canvas.edges(spanning_tree).thickness(6).color('pink')
</data>
