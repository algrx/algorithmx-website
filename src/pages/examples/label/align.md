---
title: 'Align'
docs: ['LabelSelection.align']
---

All possible label alignments:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
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
    const aligns = Object.keys(alignPos)
    
    const initNode = canvas.node(1).add({
        shape: 'rect',
        size: [140, 80],
        labels: { 0: { remove: true } }
    })
    
    initNode.labels(aligns).data(aligns).add({
        align: k => k,
        radius: 0,
        color: 'white'
    })
    initNode.labels(aligns)
        .data(Object.values(alignPos))
        .pos(p => [
              p[0] === 1 ? 'x - 8' : p[0] === -1 ? '-x + 8' : 0,
              p[1] === 1 ? 'y - 8' : p[1] === -1 ? '-y + 8' : 0
        ])
  python: |
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
    aligns = align_pos.keys()
    
    init_node = canvas.node(1).add(
        shape='rect',
        size=(140, 80),
        labels={0: {'remove': True}}
    )
    
    init_node.labels(aligns).data(aligns).add(
        align=lambda a: a,
        color='white',
        radius=0
    )
    init_node.labels(aligns) \
        .data(align_pos.values()) \
        .pos(lambda p: (
            'x - 8' if p[0] is 1 else '-x + 8' if p[0] is -1 else 0,
            'y - 8' if p[1] is 1 else '-y + 8' if p[1] is -1 else 0
        ))
</data>
