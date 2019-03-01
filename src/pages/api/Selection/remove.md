---
title: 'Remove'
docs: ['Selection.remove']
---

Removing labels, edges and nodes:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.nodes([1, 2]).add()
    canvas.edge([1, 2]).add()
      .label().add().text('label')
    
    canvas.pause(1)
    
    canvas.edge([1, 2]).label().color('red')
      .pause(1).remove().pause(1)
    canvas.edge([1, 2]).color('red').pause(1).remove().pause(1)
    canvas.node(2).color('red').pause(1).remove().pause(1)
    canvas.node(1).color('red').pause(1).remove().pause(1)
  python: |
    canvas.nodes([1, 2]).add()
    canvas.edge((1, 2)).add()
      .label().add().text('label')
    
    canvas.pause(1)
    
    canvas.edge((1, 2)).label().color('red')
      .pause(1).remove().pause(1)
    canvas.edge((1, 2)).color('red').pause(1).remove().pause(1)
    canvas.node(2).color('red').pause(1).remove().pause(1)
    canvas.node(1).color('red').pause(1).remove().pause(1)
</data>
