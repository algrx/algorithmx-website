---
title: 'Shape'
docs: ['NodeSelection.shape']
---

Square, rectangular, and circular nodes:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.node(1).add({
        shape: 'rect',
        size: [30, 30],
        labels: { 0: { text: 'Square' } }
    })
    
    canvas.node(2).add({
        shape: 'rect',
        size: [40, 12],
        labels: { 0: { text: 'Rectangle' } }
    })
    
    canvas.node(3).add({
        shape: 'circle',
        size: 25,
        labels: { 0: { text: 'Circle' } }
    })
    
    canvas.edges([[1, 2], [2, 3], [3, 1]]).add()
  python: |
    canvas.node(1).add(
        shape='rect',
        size=(30, 30),
        labels={0: {'text': 'Square'}}
    )
    
    canvas.node(2).add(
        shape='rect',
        size=(40, 12),
        labels={0: {'text': 'Rectangle'}}
    )
    
    canvas.node(3).add(
        shape='circle',
        size=25,
        labels={0: {'text': 'Circle'}}
    )
    
    canvas.edges([(1, 2), (2, 3), (3, 1)]).add()
</data>
