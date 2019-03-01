---
title: 'Pos'
docs: ['NodeSelection.pos']
---

Positioning nodes along a grid:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    let nodeCoords = []
    let edgeIds = []
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        nodeCoords.push([i, j])
        if (i < 5) edgeIds.push([[i, j], [i + 1, j]])
        if (j < 5) edgeIds.push([[i, j], [i, j + 1]])
      }
    }
    
    canvas.nodes(nodeCoords).add()
      .pos(p => [(p[0] - 2) * 35, (p[1] - 2) * 35])
      .fixed(true)
      .label().remove()
    
    canvas.edges(edgeIds).add()
  python: |
    node_coords = []
    edge_ids = []
    for i in range(5):
        for j in range(5):
            node_coords.append((i, j))
            if i < 5: edge_ids.append(((i, j), (i + 1, j)))
            if j < 5: edge_ids.append(((i, j), (i, j + 1)))
    
    canvas.nodes(node_coords).add() \
      .pos(lambda p: ((p[0] - 2) * 35, (p[1] - 2) * 35)) \
      .fixed(True) \
      .label().remove()
    
    canvas.edges(edge_ids).add()
</data>
