---
title: 'Nodes'
docs: ['CanvasSelection.node', 'CanvasSelection.nodes']
---

Adding and manipulating nodes:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.nodes([1, 2, 3, 4, 5]).add()
      .color('blue')
      .pos((n, i) => [(i - 2) * 50, 0])
    
    canvas.pause(0.5)
    
    for (let i = 1; i < 6; i++) {
      canvas.node(i).highlight().color('red').size('1.2x')
      canvas.pause(0.2)
    }
  python: |
    canvas.nodes([1, 2, 3, 4, 5]).add()
      .color('blue')
      .pos(lambda: n, i: [(i - 2) * 50, 0])
    
    canvas.pause(0.5)
    
    for i in range(1, 6):
        canvas.node(i).highlight().color('red').size('1.2x')
        canvas.pause(0.2)
</data>
