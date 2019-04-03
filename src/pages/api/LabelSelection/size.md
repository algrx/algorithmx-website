---
title: 'Size'
docs: ['LabelSelection.size']
---

Labels with various sizes:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    const initNode = canvas.node(1).add().size(70)
    initNode.label().remove()
    
    const sizes = Array(20).fill(0).map((n, i) => i + 1)
    initNode.labels(sizes).add().data(sizes)
        .color('white')
        .rotate(true)
        .radius(s => s * 2)
        .angle((s, i) => -i * 360 * 2 / sizes.length + 90)
        .size(s => s)
  python: |
    init_node = canvas.node(1).add().size(70)
    init_node.label().remove()
    
    sizes = range(1, 21)
    init_node.labels(sizes).add().data(sizes) \
        .color('white') \
        .rotate(True) \
        .radius(lambda s: s * 2) \
        .angle(lambda s, i: -i * 360 * 2 / len(sizes) + 90) \
        .size(lambda s: s)
</data>
