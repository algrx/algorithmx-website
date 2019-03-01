---
title: 'Fixed & Draggable'
docs: ['NodeSelection.fixed', 'NodeSelection.draggable']
---

Creating a bipartite graph with fixed nodes that cannot be moved:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    for (let i = 0; i < 5; i++) {
      canvas.node('s-' + i).add()
        .pos([-40, (i - 2) * 35])
        .color('red')
        .fixed(true).draggable(false)
        .label().text(i)
      
      canvas.node('t-' + i).add()
        .pos([40, (i - 2) * 35])
        .color('green')
        .fixed(true).draggable(false)
        .label().text(i)
    }
    
    const connections = [
      [0, 1], [0, 3],
      [1, 0], [1, 1], [1, 4],
      [2, 3], [2, 4],
      [3, 0], [3, 1], [3, 3], [3, 4],
      [4, 2], [4, 4]
    ]
    const edgeIds = connections.map(c => ['s-' + c[0], 't-' + c[1]])
    
    canvas.edges(edgeIds).add()
  python: |
    for i in range(5):
        canvas.node('s-' + str(i)).add() \ 
          .pos((-40, (i - 2) * 35)) \
          .color('red') \
          .fixed(True).draggable(False) \
          .label().text(i)
        
        canvas.node('t-' + str(i)).add() \
          .pos((40, (i - 2) * 35)) \
          .color('green') \
          .fixed(True).draggable(False) \
          .label().text(i)
    
    connections = [
      (0, 1), (0, 3),
      (1, 0), (1, 1), (1, 4),
      (2, 3), (2, 4),
      (3, 0), (3, 1), (3, 3), (3, 4),
      (4, 2), (4, 4)
    ]
    edge_ids = [('s-' + str(s), 't-' + str(t))
                for s, t in connections]
    
    canvas.edges(edge_ids).add()
</data>
