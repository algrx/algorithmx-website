---
title: 'Pan & Zoom Limits'
docs: ['CanvasSelection.panlimit', 'CanvasSelection.zoomlimit', 'CanvasSelection.zoomkey']
---

Restricting pan and zoom to a box the size of the canvas:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.node(1).add().pos(['-cx + 35', 'cy - 35']).fixed(true)
    canvas.node(2).add().pos(['cx - 35', 'cy - 35']).fixed(true)
    canvas.node(3).add().pos(['-cx + 35', '-cy + 35']).fixed(true)
    canvas.node(4).add().pos(['cx - 35', '-cy + 35']).fixed(true)
    canvas.edges([[1, 2], [2, 4], [4, 3], [3, 1]]).add()
    
    canvas.panlimit(['cx', 'cy'])
    canvas.zoomlimit([1, 3])
  python: |
    canvas.node(1).add().pos(('-cx + 35', 'cy - 35')).fixed(True)
    canvas.node(2).add().pos(('cx - 35', 'cy - 35')).fixed(True)
    canvas.node(3).add().pos(('-cx + 35', '-cy + 35')).fixed(True)
    canvas.node(4).add().pos(('cx - 35', '-cy + 35')).fixed(True)
    canvas.edges([(1, 2), (2, 4), (4, 3), (3, 1)]).add()
    
    canvas.panlimit(('cx', 'cy'))
    canvas.zoomlimit((1, 3))
</data>
