---
title: 'Curve'
docs: ['EdgeSelection.curve']
---

Edges with various curve functions:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.nodes([1, 2, 3, 4, 5]).add({
        pos: (_, i) => [(i - 2) * 80, 0]
    })
    
    const curves = [
        'linear',
        'natural',
        'bundle',
        'step'
    ]
    
    const edges = [[1, 2], [2, 3], [3, 4], [4, 5]]
    canvas.edges(edges).data(curves).add({
        path: [[-5, 5], [5, -5]],
        curve: c => c,
        labels: c => ({ 0: {
            text: c,
            pos: [0, 8]
        }})
    })
  python: |
    canvas.nodes([1, 2, 3, 4, 5]).add(
        pos=lambda _, i: ((i - 2) * 80, 0)
    )
    
    curves = [
        'linear',
        'natural',
        'bundle',
        'step'
    ]
    
    edges = [(1, 2), (2, 3), (3, 4), (4, 5)]
    canvas.edges(edges).data(curves).add(
        path=[(-5, 5), (5, -5)],
        curve=lambda c: c,
        labels=lambda c: {0: { 
            'text': c,
            'pos': (0, 8)
        }}
    )
</data>
