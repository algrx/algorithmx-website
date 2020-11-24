---
title: 'Pause'
docs: ['Selection.pause']
---

Countdown with a 1 second pause at each interval:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.node(1).add({
        size: 20,
        labels: { 0: { size: 16 } }
    })
    
    for (let i = 3; i > 0; i--) {
        canvas.node(1).label().text(i)
        canvas.pause(1)
    }
    
    canvas.node(1).add({
        size: 30,
        color: 'green',
        labels: { 0: { text: 'Go!' } }
    })
  python: |
    canvas.node(1).add(
        size=20,
        labels={0: {'size': 16}}
    )
    
    for i in range(3, 0, -1):
        canvas.node(1).label().text(i)
        canvas.pause(1)
    
    canvas.node(1).attrs(
        size=30,
        color='green',
        labels={0: {'text': 'Go!'}}
    )
</data>
