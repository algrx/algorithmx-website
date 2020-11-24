---
title: 'Length'
docs: ['EdgeSelection.length']
---

Specifying individual edge lengths:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.edgelayout('individual')
    
    const edgeLengths = {
        '1,2': 80,
        '1,3': 120,
        '2,3': 70,
        '2,4': 60,
        '3,4': 90
    }
    
    canvas.nodes([1, 2, 3, 4]).add()
    
    const edges = Object.keys(edgeLengths).map(k => k.split(','))
    canvas.edges(edges).data(Object.values(edgeLengths)).add({
        length: d => d,
        labels: d => ({ 0: { 'text': d } })
    })
  python: |
    canvas.edgelayout('individual')
    
    edge_lengths = {
        '1,2': 80,
        '1,3': 120,
        '2,3': 70,
        '2,4': 60,
        '3,4': 90
    }
    
    canvas.nodes(range(1, 5)).add()
    
    edges = [k.split(',') for k in edge_lengths]
    canvas.edges(edges).data(edge_lengths.values()).add(
        length=lambda d: d,
        labels=lambda d: {0: {'text': d}}
    )
</data>
