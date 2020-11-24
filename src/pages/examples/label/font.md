---
title: 'Font'
docs: ['LabelSelection.font']
---

Labels with custom fonts:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.node(1).add({
        shape: 'rect',
        size: [30, 30],
        labels: {
            0: { text: 'Custom\nFonts' },
            1: { text: 'Times', font: 'Times' },
            2: { text: 'Courier', font: 'Courier' },
            3: { text: 'Verdana', font: 'Verdana' },
            4: { text: 'Impact', font: 'Impact' }
        }
    })
  python: |
    canvas.node(1).add(
        shape='rect',
        size=(30, 30),
        labels={
            0: {'text': 'Custom\nFonts'},
            1: {'text': 'Times', 'font': 'Times'},
            2: {'text': 'Courier', 'font': 'Courier'},
            3: {'text': 'Verdana', 'font': 'Verdana'},
            4: {'text': 'Impact', 'font': 'Impact'}
        }
    )
</data>
