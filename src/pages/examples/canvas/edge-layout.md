---
title: 'Edge Layout'
docs: ['Canvas.edgelayout', 'Canvas.edgelength']
---

Short 'jaccard' edge layout:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.edgelayout('jaccard').edgelength(40)
    
    canvas.nodes([1, 2, 3, 4, 5]).add()
    canvas.edges([[1, 2], [2, 3], [3, 4],
        [2, 4], [1, 4], [1, 5], [4, 5]]).add()
  python: |
    canvas.edgelayout('jaccard').edgelength(40)
    
    canvas.nodes([1, 2, 3, 4, 5]).add()
    canvas.edges([(1, 2), (2, 3), (3, 4),
        (2, 4), (1, 4), (1, 5), (4, 5)]).add()
</data>

Long 'symmetric' edge layout:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.edgelayout('symmetric').edgelength(100)
    
    canvas.nodes([1, 2, 3, 4, 5]).add()
    canvas.edges([[1, 2], [2, 3], [3, 4],
        [2, 4], [1, 4], [1, 5], [4, 5]]).add()
  python: |
    canvas.edgelayout('symmetric').edgelength(100)
    
    canvas.nodes([1, 2, 3, 4, 5]).add()
    canvas.edges([(1, 2), (2, 3), (3, 4),
        (2, 4), (1, 4), (1, 5), (4, 5)]).add()
</data>

Individual edge layout:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.edgelayout('individual')
    
    canvas.nodes([1, 2, 3, 4, 5]).add()
    canvas.edges([[1, 2], [2, 3], [3, 4], [2, 4]]).add()
    
    canvas.edge([1, 4]).add({ length: 50 })
        .label().add({ text: 50 })
    canvas.edge([1, 5]).add({ length: 100 })
        .label().add({ text: 100 })
    canvas.edge([4, 5]).add({ length: 80 })
        .label().add({ text: 80 })
  python: |
    canvas.edgelayout('individual')
    
    canvas.nodes([1, 2, 3, 4, 5]).add()
    canvas.edges([(1, 2), (2, 3), (3, 4), (2, 4)]).add()
    
    canvas.edge((1, 4)).add(length=50) \
        .label().add(text=50)
    canvas.edge((1, 5)).add(length=100) \
        .label().add(text=100)
    canvas.edge((4, 5)).add(length=80) \
        .label().add(text=80)
</data>
