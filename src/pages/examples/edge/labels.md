---
title: 'Labels'
docs: ['EdgeSelection.label', 'EdgeSelection.labels']
---

Displaying edge data using multiple labels:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    const edgeData = {
        '1-2': [4.5, 420],
        '1-3': [3.8, 730],
        '2-3': [2.9, 180],
        '2-4': [6.2, 940],
        '3-4': [9,3, 550],
        '3-5': [1.4, 380],
        '4-5': [2.7, 290]
    }
    
    canvas.nodes([1, 2, 3, 4, 5]).add()
    
    const edges = Object.keys(edgeData).map(k => k.split('-'))
    canvas.edges(edges).data(Object.values(edgeData)).add({
        labels: d => ({
            1: { color: 'red', text: d[0] },
            2: { color: 'blue', text: d[1] }
        })
    })
  python: |
    edge_data = {
        '1-2': (4.5, 420),
        '1-3': (3.8, 730),
        '2-3': (2.9, 180),
        '2-4': (6.2, 940),
        '3-4': (9,3, 550),
        '3-5': (1.4, 380),
        '4-5': (2.7, 290)
    }
    
    canvas.nodes(range(1, 6)).add()
    
    edges = [k.split('-') for k in edge_data]
    canvas.edges(edges).data(edge_data.values()).add(
        labels=lambda d: {
            1: {'color': 'red', 'text': d[0]},
            2: {'color': 'blue', 'text': d[1]}
        }
    )
</data>
