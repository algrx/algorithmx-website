---
title: 'Traverse'
docs: ['EdgeSelection.traverse']
---

Change edge color with a traversal animation:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.nodes([1, 2, 3, 4]).add()
    canvas.edges([[1, 2], [2, 3], [3, 4], [4, 1]]).add()
    canvas.pause(0.5)
    
    canvas.edge([1, 2]).traverse('red').pause(0.5)
    canvas.edge([2, 3]).traverse('green').pause(0.5)
    canvas.edge([3, 4]).traverse('blue').pause(0.5)
    canvas.edge([4, 1]).traverse('yellow')
  python: |
    canvas.nodes([1, 2, 3, 4]).add()
    canvas.edges([(1, 2), (2, 3), (3, 4), (4, 1)]).add()
    canvas.pause(0.5)
    
    canvas.edge((1, 2)).traverse('red').pause(0.5)
    canvas.edge((2, 3)).traverse('green').pause(0.5)
    canvas.edge((3, 4)).traverse('blue').pause(0.5)
    canvas.edge((4, 1)).traverse('yellow')
</data>

Specify the traversal source node:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    const source = 1
    canvas.nodes([source, 2, 3, 4]).add()
    
    const edges = [[source, 2], [source, 3], [4, source]]
    canvas.edges(edges).add({ directed: true })
    canvas.pause(0.5)
    
    canvas.node(source).highlight(1).color('red').size('1.2x')
    canvas.pause(0.5)
    canvas.edges(edges).highlight(0).traverse('red', source)
    canvas.pause(1.5)
    
    canvas.nodes([2, 3, 4]).highlight(1).color('green').size('1.2x')
    canvas.pause(0.5)
    canvas.edges(edges).highlight(0).traverse(
        'green',
        e => e[0] === source ? e[1] : e[0]
    )
  python: |
    source = 1
    canvas.nodes([source, 2, 3, 4]).add()
    
    edges = [(source, 2), (source, 3), (4, source)]
    canvas.edges(edges).add(directed=True)
    canvas.pause(0.5)
    
    canvas.node(source).highlight(1).color('red').size('1.2x')
    canvas.pause(0.5)
    canvas.edges(edges).highlight(0).traverse('red', source)
    canvas.pause(1.5)
    
    canvas.nodes([2, 3, 4]).highlight(1).color('green').size('1.2x')
    canvas.pause(0.5)
    canvas.edges(edges).highlight(0).traverse(
        'green',
        lambda e: e[1] if e[0] == source else e[0]
    )
</data>
