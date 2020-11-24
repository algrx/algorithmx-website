---
title: 'Size'
docs: ['LabelSelection.size']
---

Labels with various sizes:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    const sizes = Array(20).fill(0).map((n, i) => i + 1)
    
    canvas.node(1).add({
        size: 70,
        labels: { 0: { remove: true } }
    }).labels(sizes).data(sizes).add({
        color: 'white',
        rotate: true,
        radius: s => s * 2,
        angle: (_, i) => -i * 360 * 2 / sizes.length + 90,
        size: s => s
    })
  python: |
    canvas.node(1).add(
        size=70,
        labels={0: {'remove': True}}
    ).labels(range(1, 21)).data(range(1, 21)).add(
        color='white',
        rotate=True,
        radius=lambda s: s * 2,
        angle=lambda _, i: -i * 360 * 2 / 20 + 90,
        size=lambda s: s
    )
</data>
