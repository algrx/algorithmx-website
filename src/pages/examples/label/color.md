---
title: 'Color'
docs: ['LabelSelection.size']
---

Labels with various colors:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    const colors = ['#55BAC3', '#57AEC4', '#58A3C5',
        '#5997C6', '#5A8CC6', '#5B80C7', '#5C75C8', '#5D69C9',
        '#5E5ECA', '#6C5FCB', '#7960CC', '#8761CD', '#9462CE'
    ]
    
    canvas.labels(colors).data(colors).add({
        pos: [0, 0],
        align: 'middle-left',
        radius: 30,
        size: 12,
        angle: (_, i) => -i * 360 / colors.length + 90,
        color: c => c
    })
  python: |
    colors = ['#55BAC3', '#57AEC4', '#58A3C5',
        '#5997C6', '#5A8CC6', '#5B80C7', '#5C75C8', '#5D69C9',
        '#5E5ECA', '#6C5FCB', '#7960CC', '#8761CD', '#9462CE'
    ]
    
    canvas.labels(colors).data(colors).add(
        pos=[0, 0],
        align='middle-left',
        radius=30,
        size=12,
        angle=lambda _, i: -i * 360 / len(colors) + 90,
        color=lambda c: c
    )
</data>
