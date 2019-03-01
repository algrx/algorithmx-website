---
title: 'Ease'
docs: ['Selection.ease']
---

Changing node size with various animation ease options:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.nodes([1, 2, 3, 4, 5]).add()
      .pos((n, i) => [(i - 2) * 50, 0])
    
    canvas.pause(0.5)
    canvas.node(1).ease('linear').size('1.5x').pause(0.5)
    canvas.node(2).ease('poly').size('1.5x').pause(0.5)
    canvas.node(3).ease('bounce').size('1.5x').pause(0.5)
    canvas.node(4).ease('back').size('1.5x').pause(0.5)
    canvas.node(5).ease('elastic-in').size('1.5x')
  python: |
    canvas.nodes([1, 2, 3, 4, 5]).add() \
      .pos(lambda n, i: ((i - 2) * 50, 0))
    
    canvas.pause(0.5)
    canvas.node(1).ease('linear').size('1.5x').pause(0.5)
    canvas.node(2).ease('poly').size('1.5x').pause(0.5)
    canvas.node(3).ease('bounce').size('1.5x').pause(0.5)
    canvas.node(4).ease('back').size('1.5x').pause(0.5)
    canvas.node(5).ease('elastic-in').size('1.5x')
</data>
