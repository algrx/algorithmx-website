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
        canvas.node(i).add({ pos: [(i - 2) * 50, 20] })
        canvas.node(i + 5).add({ pos: [(i - 2) * 50, -20] })
        if (i > 0) {
            canvas.edge([i - 1, i]).add()
            canvas.edge([i + 4, i + 5]).add()
        }
    }
    
    for (let i = 0; i < 4; i++) {
      canvas.withQ('q1').pause(0.5)
          .edge([i, i + 1]).traverse('red')
      canvas.withQ('q2').pause(0.5)
          .edge([i + 5, i + 6]).traverse('green')
    }
    
    // Stop
    canvas.pause(1)
    canvas.withQ().queue('q1').stop()
  
    canvas.pause(1)
    canvas.withQ().queue('q2').stop()
    
    // Start
    canvas.withQ().queue('q1').start()
    canvas.withQ().pause(1).queue('q2').start()
  python: |
    for i in range(5):
        canvas.node(i).add(pos=((i - 2) * 50, 20))
        canvas.node(i + 5).add(pos=((i - 2) * 50, -20))
        if i > 0:
            canvas.edge((i - 1, i)).add()
            canvas.edge((i + 4, i + 5)).add()
    
    for i in range(4):
        canvas.withQ('q1').pause(0.5) \
            .edge((i, i + 1)).traverse('red')
        canvas.withQ('q2').pause(0.5) \
            .edge((i + 5, i + 6)).traverse('green')
    
    # Stop
    canvas.pause(1)
    canvas.withQ().queue('q1').stop()
  
    canvas.pause(1)
    canvas.withQ().queue('q2').stop()
    
    # Start
    canvas.withQ().queue('q1').start()
    canvas.withQ().pause(1).queue('q2').start()
