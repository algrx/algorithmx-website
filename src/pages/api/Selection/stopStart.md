---
title: 'Stop & Start'
docs: ['Selection.start', 'Selection.startall', 'Selection.stop', 'Selection.stopall']
---

Stopping then starting edge traversals:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    for (let i = 0; i < 5; i++) {
      canvas.node(i).add().pos([(i - 2) * 50, 20])
      canvas.node(i + 5).add().pos([(i - 2) * 50, -20])
      if (i > 0) {
        canvas.edge([i - 1, i]).add()
        canvas.edge([i + 4, i + 5]).add()
      }
    }
    
    for (let i = 0; i < 4; i++) {
      canvas.eventQ('q1').pause(0.5).edge([i, i + 1])
        .traverse().color('red')
      canvas.eventQ('q2').pause(0.5).edge([i + 5, i + 6])
        .traverse().color('green')
    }
    
    // Stopping
    canvas.pause(1)
    canvas.stop('q1')
  
    canvas.pause(1)
    canvas.stop('q2')
    
    canvas.pause(1)
    
    // Starting
    canvas.start('q1')
    canvas.pause(1).start('q2')
  python: |
    for i in range(5):
        canvas.node(i).add().pos(((i - 2) * 50, 20)
        canvas.node(i + 5).add().pos(((i - 2) * 50, -20))
        if i > 0:
            canvas.edge((i - 1, i)).add()
            canvas.edge((i + 4, i + 5)).add()
    
    for i in range(4):
        canvas.eventQ('q1').pause(0.5).edge((i, i + 1)) \
          .traverse().color('red')
        canvas.eventQ('q2').pause(0.5).edge((i + 5, i + 6)) \
          .traverse().color('green')
    
    # Stopping
    canvas.pause(1)
    canvas.stop('q1')
    
    canvas.pause(1)
    canvas.stop('q2')
    
    canvas.pause(1)
    
    # Starting
    canvas.start('q1')
    canvas.pause(1).start('q2')
