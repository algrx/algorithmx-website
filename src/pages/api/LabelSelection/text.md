---
title: 'Text'
docs: ['LabelSelection.text']
---

Adding a label with multiple lines of text:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.edgelengths('individual')
    canvas.nodes([1, 2]).add()
    
    canvas.edge([1, 2]).add()
        .length(120)
        .label().add()
            .text('This is a label\nwith multiple\nlines of text')
  python: |
    canvas.edgelengths('individual')
    canvas.nodes([1, 2]).add()
    
    canvas.edge((1, 2)).add() \
        .length(120) \
        .label().add() \
            .text('This is a label\nwith multiple\nlines of text')
</data>
