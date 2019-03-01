---
title: 'Duration'
docs: ['Selection.duration']
---

Edge traversals with various durations:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    for (let i = 0; i < 5; i++) {
      canvas.node(i).add().pos([(i - 2) * 50, -20])
      canvas.node(i + 5).add().pos([(i - 2) * 50, 20])
      canvas.edge([i, i + 5]).add()
    }
    
    canvas.pause(0.5)
    
    for (let i = 0; i < 5; i++) {
      canvas.edge([i, i + 5]).duration(1 + i / 2)
        .traverse().color('red')
    }
  python: |
    for i in range(5):
        canvas.node(i).add().pos(((i - 2) * 50, -20))
        canvas.node(i + 5).add().pos(((i - 2) * 50, 20))
        canvas.edge((i, i + 5)).add()
    
    canvas.pause(0.5)
    
    for i in range(5):
        canvas.edge((i, i + 5)).duration(1 + i / 2) \
          .traverse().color('red')
