---
title: 'Pan & Zoom'
docs: ['CanvasSelection.pan', 'CanvasSelection.zoom']
---


Using pan and zoom for animation close-ups:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.node(1).add().pos([-50, 0]).fixed(true)
    canvas.node(2).add().pos([50, 0]).fixed(true)
    canvas.edge([1, 2]).add()
    canvas.pause(0.5)
    
    canvas.duration(1).zoom(3).pan([-50, 0]).pause(1)
    
    canvas.node(1).color('purple').pause(0.5)
    
    canvas.duration(1).edge([1, 2]).traverse().color('purple')
    canvas.duration(1).pan([50, 0]).pause(1)
    
    canvas.node(2).color('purple').pause(0.5)
    
    canvas.duration(1).zoom(1).pan([0, 0])
  python: |
    canvas.node(1).add().pos((-50, 0)).fixed(True)
    canvas.node(2).add().pos((50, 0)).fixed(True)
    canvas.edge((1, 2)).add()
    canvas.pause(1)
    
    canvas.duration(1).zoom(3).pan((-50, 0)).pause(1)
    
    canvas.node(1).color('purple').pause(0.5)
    
    canvas.duration(1).edge((1, 2)).traverse().color('purple')
    canvas.duration(1).pan((50, 0)).pause(1)
    
    canvas.node(2).color('purple').pause(0.5)
    
    canvas.duration(1).zoom(1).pan((0, 0))
</data>
