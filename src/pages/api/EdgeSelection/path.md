---
title: 'Path'
docs: ['EdgeSelection.path']
---

Edges with various paths:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.nodes([1, 2, 3, 4, 5]).add()
      .pos((n, i) => [(i - 2) * 80, 0])
    
    canvas.edge([1, 2]).add().path([[-5, 5], [5, -5]])
    canvas.edge([2, 3]).add().path([[-2, 10], [2, -10]])
    
    canvas.edge([3, 4]).add()
      .path([[-5, -10], [5, 10], [-5, 10], [5, -10]])
    
    canvas.edge([4, 5]).add()
      .path(Array(10).fill(0).map((k, i) =>
        [(i - 4.5) * 4, Math.pow(-1, i) * 4]))
    
    canvas.pause(0.5)
    for (let i = 1; i < 5; i++) {
      canvas.edge([i, i + 1]).traverse().duration(1).color('blue')
      canvas.pause(0.75)
    }
  python: |
    canvas.nodes([1, 2, 3, 4, 5]).add() \
      .pos(lambda n, i: ((i - 2) * 80, 0))
    
    canvas.edge((1, 2)).add().path([(-5, 5), (5, -5)])
    canvas.edge((2, 3)).add().path([(-2, 10), (2, -10)])
    
    canvas.edge((3, 4)).add() \
      .path([(-5, -10), (5, 10), (-5, 10), (5, -10)])
    
    canvas.edge((4, 5)).add() \
      .path([((i - 4.5) * 4, ((-1)**i) * 4) for i in range(10)])
    
    canvas.pause(0.5)
    for i in range(1, 4):
        canvas.edge((i, i + 1)).traverse().duration(1).color('blue')
        canvas.pause(0.75)
</data>
