---
title: 'Directed'
docs: ['EdgeSelection.directed']
---

Generate a directed integer tree:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.duration(0).zoom(0.7)
    
    canvas.node(1).add()
    for (let n = 1; n < 20; n++) {
        const [n1, n2] = [n * 2, n * 2 + 1]
        canvas.nodes([n1, n2]).add()
        canvas.edges([[n1, n], [n2, n]]).add({ directed: true })
    }
  python: |
    canvas.duration(0).zoom(0.7)
    
    canvas.node(1).add()
    for n in range(1, 20):
        n1, n2 = n * 2, n * 2 + 1
        canvas.nodes([n1, n2]).add()
        canvas.edges([(n1, n), (n2, n)]).add(directed=True)
</data>
