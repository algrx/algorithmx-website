---
title: 'Click'
docs: ['NodeSelection.click']
---

Click on any leaf node to expand the integer tree:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    function onClick(n) {
      const [n1, n2] = [n * 2, n * 2 + 1]
      canvas.nodes([n1, n2]).add().click(onClick)
      canvas.edges([[n1, n], [n2, n]]).add().directed(true)
    }
    
    canvas.node(1).add().click(onClick)
  python: |
    def on_click(n):
        n1, n2 = n * 2, n * 2 + 1
        canvas.nodes([n1, n2]).add().click(on_click)
        canvas.edges([(n1, n), (n2, n)]).add().directed(True)
    
    canvas.node(1).add().click(on_click)
</data>
