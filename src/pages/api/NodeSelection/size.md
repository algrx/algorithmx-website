---
title: 'Size'
docs: ['NodeSelection.size']
---

Setting the size of rectangular nodes:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    const sizes = [[30, 12], [30, 20], [30, 30], [30, 50]]
    
    canvas.nodes([1, 2, 3, 4]).add()
      .pos((n, i) => [(i - 1.5) * 75, 0])
      .shape('rect')
      .data(sizes).size(s => s)
  python: |
    const sizes = [(30, 12), (30, 20), (30, 30), (30, 50)]
    
    canvas.nodes([1, 2, 3, 4]).add()
      .pos((n, i) => ((i - 1.5) * 75, 0))
      .shape('rect')
      .data(sizes).size(lambda s: s)
</data>

Changing and animating size:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.nodes([1, 2, 3]).add()
    canvas.edges([[1, 2], [2, 3]]).add()
    canvas.pause(0.5)
    
    canvas.node(1).size('1.5x').pause(0.5)
    canvas.node(2).size('2x').pause(0.5)
    canvas.node(3).size('2.5x').pause(1)
    
    canvas.nodes([1, 2, 3]).highlight(0).size('0.75x')
  python: |
    canvas.nodes([1, 2, 3]).add()
    canvas.edges([(1, 2), (2, 3)]).add()
    canvas.pause(0.5)
    
    canvas.node(1).size('1.5x').pause(0.5)
    canvas.node(2).size('2x').pause(0.5)
    canvas.node(3).size('2.5x').pause(1)
    
    canvas.nodes([1, 2, 3]).highlight(0).size('0.75x')
</data>
