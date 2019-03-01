---
title: 'Length'
docs: ['EdgeSelection.length']
---

Specifying individual edge lengths:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.edgelengths('individual')
    
    const numNodes = 4
    const edgeLengths = {
      '1,2': 80,
      '1,3': 120,
      '2,3': 70,
      '2,4': 60,
      '3,4': 90
    }
    
    canvas.nodes(Array(numNodes).fill(0).map((n, i) => i + 1)).add()
    
    canvas.edges(Object.keys(edgeLengths).map(k => k.split(',')))
      .add().data(Object.values(edgeLengths))
      .length(l => l)
      .label().add()
        .text(l => l)
  python: |
    canvas.edgelengths('individual')
    
    num_nodes = 4
    edge_lengths = {
      '1,2': 80,
      '1,3': 120,
      '2,3': 70,
      '2,4': 60,
      '3,4': 90
    }
    
    canvas.nodes(range(1, num_nodes + 1)).add()
    
    canvas.edges([k.split(',') for k in edge_data]) \
      .add().data(edge_lengths.values()) \
      .length(lambda l: l) \
      .label().add() \
        .text(lambda l: l)
</data>
