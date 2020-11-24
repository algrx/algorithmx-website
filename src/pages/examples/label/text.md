---
title: 'Text'
docs: ['LabelSelection.text']
---

Add a label with multiple lines of text:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.edgelayout('individual')
    canvas.nodes([1, 2]).add()
    
    canvas.edge([1, 2]).add({
        length: 120,
        labels: { 0: {
            text: 'This is a label\nwith multiple\nlines of text'
        }}
    })
  python: |
    canvas.edgelayout('individual')
    canvas.nodes([1, 2]).add()
    
    canvas.edge((1, 2)).add(
        length=120,
        labels={0: {
            'text': 'This is a label\nwith multiple\nlines of text'
        }}
    )
</data>
