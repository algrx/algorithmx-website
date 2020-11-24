---
title: 'Size'
docs: ['NodeSelection.size']
---

Rectangles with different sizes:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    const sizes = [[30, 12], [30, 20], [30, 30], [30, 50]]
    
    canvas.nodes([1, 2, 3, 4]).data(sizes).add({
        pos: (_, i) => [(i - 1.5) * 75, 0],
        shape: 'rect',
        size: s => s
    })
  python: |
    sizes = [(30, 12), (30, 20), (30, 30), (30, 50)]
    
    canvas.nodes([1, 2, 3, 4]).data(sizes).add(
        pos=lambda _, i: ((i - 1.5) * 75, 0),
        shape='rect',
        size=lambda s: s
    )
</data>

Change and animate size:

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
