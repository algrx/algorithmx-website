---
title: 'Pan & Zoom Limits'
docs: ['Canvas.panlimit', 'Canvas.zoomlimit', 'Canvas.zoomtoggle']
---

Restrict panning and zooming to a box the size of the canvas:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.panlimit(['cx', 'cy']).zoomlimit([1, 3])
    
    canvas.node(1).add({ pos: ['-cx+35', 'cy-35'], fixed: true })
    canvas.node(2).add({ pos: ['cx-35', 'cy-35'], fixed: true })
    canvas.node(3).add({ pos: ['-cx+35', '-cy+35'], fixed: true })
    canvas.node(4).add({ pos: ['cx-35', '-cy+35'], fixed: true })
    canvas.edges([[1, 2], [2, 4], [4, 3], [3, 1]]).add()
  python: |
    canvas.panlimit(('cx', 'cy')).zoomlimit((1, 3))
    
    canvas.node(1).add(pos=('-cx+35', 'cy-35'), fixed=True)
    canvas.node(2).add(pos=('cx-35', 'cy-35'), fixed=True)
    canvas.node(3).add(pos=('-cx+35', '-cy+35'), fixed=True)
    canvas.node(4).add(pos=('cx-35', '-cy+35'), fixed=True)
    canvas.edges([(1, 2), (2, 4), (4, 3), (3, 1)]).add()
</data>
