---
title: 'Pause'
docs: ['Selection.pause']
---

Countdown with a 1 second pause at each interval:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.node(1).add().size(20)
      .label().size(16)
    
    for (let i = 5; i > 0; i--) {
      canvas.node(1).label().text(i)
      canvas.pause(1)
    }
    
    canvas.node(1).size(30).color('green')
      .label().text('GO!')
  python: |
    canvas.node(1).add().size(20) \
      .label().size(16)
    
    for i in range(5, 0, -1):
      canvas.node(1).label().text(i)
      canvas.pause(1)
    
    canvas.node(1).size(30).color('green') \
      .label().text('GO!')
</data>
