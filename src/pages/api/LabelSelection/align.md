---
title: 'Align'
docs: ['LabelSelection.align']
---

All possible label alignments:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    const initNode = canvas.node(1).add()
        .shape('rect').size([140, 80])
    initNode.label().remove()
    
    const alignPos = {
        'middle': [0, 0],
        'middle-right': [1, 0],
        'top-right': [1, 1],
        'top-middle': [0, 1],
        'top-left': [-1, 1],
        'middle-left': [-1, 0],
        'bottom-left': [-1, -1],
        'bottom-middle': [0, -1],
        'bottom-right': [1, -1]
    }
    
    initNode.labels(Object.keys(alignPos)).add()
        .data(Object.keys(alignPos))
        .align(a => a)
        .radius(0)
        .color('white')
        .data(Object.values(alignPos))
        .pos(p => [
            p[0] === 1 ? 'x - 8' : p[0] === -1 ? '-x + 8' : 0,
            p[1] === 1 ? 'y - 8' : p[1] === -1 ? '-y + 8' : 0
        ])
  python: |
    init_node = canvas.node(1).add() \
        .shape('rect').size((140, 80))
    init_node.label().remove()
    
    align_pos = {
        'middle': (0, 0),
        'middle-right': (1, 0),
        'top-right': (1, 1),
        'top-middle': (0, 1),
        'top-left': (-1, 1),
        'middle-left': (-1, 0),
        'bottom-left': (-1, -1),
        'bottom-middle': (0, -1),
        'bottom-right': (1, -1)
    }
    
    init_node.labels(align_pos.keys()).add() \
        .data(align_pos.keys()) \
        .align(lambda a: a) \
        .radius(0) \
        .color('white') \
        .data(align_pos.values()) \
        .pos(lambda p: [
            'x - 8' if p[0] is 1 else '-x + 8' if p[0] is -1 else 0,
            'y - 8' if p[1] is 1 else '-y + 8' if p[1] is -1 else 0,
        ])
</data>
