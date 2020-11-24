---
title: 'Click'
docs: ['NodeSelection.click']
---

Click on any leaf node to expand the integer tree:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    function click(n) {
        const [n1, n2] = [n * 2, n * 2 + 1]
        canvas.nodes([n1, n2]).add().onclick(click)
        canvas.edges([[n1, n], [n2, n]]).add({ directed: true })
    }
    
    canvas.node(1).add().onclick(click)
  python: |
    def click(n):
        n1, n2 = n * 2, n * 2 + 1
        canvas.nodes([n1, n2]).add().onclick(click)
        canvas.edges([(n1, n), (n2, n)]).add(directed=True)
    
    canvas.node(1).add().onclick(click)
</data>
