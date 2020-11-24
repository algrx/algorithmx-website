---
title: 'Pos'
docs: ['NodeSelection.pos']
---

Position nodes along a grid:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    let nodeCoords = []
    let edges = []
    let nodes = []
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            nodeCoords.push([i, j])
            nodes.push(`${i},${j}`)
            if (i < 4) edges.push([`${i},${j}`, `${i+1},${j}`])
            if (j < 4) edges.push([`${i},${j}`, `${i},${j+1}`])
        }
    }
    
    canvas.nodes(nodes).data(nodeCoords).add({
        pos: ([i, j]) => [(i - 2) * 35, (j - 2) * 35],
        fixed: true,
        labels: { 0: { remove: true } }
    })
    
    canvas.edges(edges).add()
  python: |
    node_coords = []
    nodes = []
    edges = []
    for i in range(5):
        for j in range(5):
            node_coords.append((i, j))
            nodes.append(f'{i},{j}')
            if i < 4: edges.append((f'{i},{j}', f'{i+1},{j}'))
            if j < 4: edges.append((f'{i},{j}', f'{i},{j+1}'))
    
    canvas.nodes(nodes).data(node_coords).add(
        pos=lambda p: ((p[0] - 2) * 35, (p[1] - 2) * 35),
        fixed=True,
        labels={0: {'remove': True}}
    )
    
    canvas.edges(edges).add()
</data>
