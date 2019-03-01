---
title: 'Labels'
docs: ['EdgeSelection.label', 'EdgeSelection.labels']
---

Displaying edge data using multiple labels:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    const numNodes = 5
    const edgeData = {
      '1,2': [4.5, 420],
      '1,3': [3.8, 730],
      '2,3': [2.9, 180],
      '2,4': [6.2, 940],
      '3,4': [9,3, 550],
      '3,5': [1.4, 380],
      '4,5': [2.7, 290]
    }
    
    canvas.nodes(Array(numNodes).fill(0).map((n, i) => i + 1)).add()
    
    const keys = Object.keys(edgeData)
    const initEdges = canvas.edges(
      Object.keys(edgeData).map(k => k.split(',')))
        .add().data(Object.values(edgeData))
    
    initEdges.label(1).add().color('red').text(v => v[0])
    initEdges.label(2).add().color('blue').text(v => v[1])
  python: |
    num_nodes = 5
    edge_data = {
      '1,2': (4.5, 420),
      '1,3': (3.8, 730),
      '2,3': (2.9, 180),
      '2,4': (6.2, 940),
      '3,4': (9,3, 550),
      '3,5': (1.4, 380),
      '4,5': (2.7, 290)
    }
    
    canvas.nodes(range(1, num_nodes + 1)).add()
    
    init_edges = canvas.edges(
      [k.split(',') for k in edge_data]) \
        .add().data(edge_data.values())
    
    init_edges.label(1).add().color('red').text(lambda v: v[0]) 
    init_edges.label(2).add().color('blue').text(lambda v: v[1])
</data>
