---
title: 'Size'
docs: ['Canvas.size']
---

Change the canvas size, which also changes the coordinate system:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.size([300, 150])
    
    canvas.node(1).add({ pos: ['-cx+35', 'cy-35'], fixed: true })
    canvas.node(2).add({ pos: ['cx-35', 'cy-35'], fixed: true })
    canvas.node(3).add({ pos: ['-cx+35', '-cy+35'], fixed: true })
    canvas.node(4).add({ pos: ['cx-35', '-cy+35'], fixed: true })
    canvas.edges([[1, 2], [2, 4], [4, 3], [3, 1]]).add()
    
    canvas.node('c').add({
        shape: 'rect',
        size: [50, 12],
        pos: [0, 0],
        labels: { 0: { text: 'Center (0, 0)' } }
    })
  python: |
    canvas.size((300, 150))
    
    canvas.node(1).add(pos=('-cx+35', 'cy-35'), fixed=True)
    canvas.node(2).add(pos=('cx-35', 'cy-35'), fixed=True)
    canvas.node(3).add(pos=('-cx+35', '-cy+35'), fixed=True)
    canvas.node(4).add(pos=('cx-35', '-cy+35'), fixed=True)
    canvas.edges([[1, 2], [2, 4], [4, 3], [3, 1]]).add()
    
    canvas.node('c').add(
        shape='rect',
        size=(50, 12),
        pos=(0, 0),
        labels={0: {'text': 'Center (0, 0)'}}
    )
</data>

Note that, in this case, the actual size of the canvas is predetermined.
