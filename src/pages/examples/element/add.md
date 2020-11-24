---
title: 'Add'
docs: ['ElementSelection.add']
---

Add nodes:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.node(1).add({ color: 'green' })
    canvas.nodes([2, 3]).add({ color: 'red' })
    
    canvas.nodes(['A', 'B', 'C']).add({
        shape: 'rect',
        color: 'blue'
    })
  python: |
    canvas.node(1).add(color='green')
    canvas.nodes([2, 3]).add(color='red')
    
    canvas.nodes(['A', 'B', 'C']).add(
        shape='rect',
        color='blue'
    )
</data>

Add edges:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.nodes([1, 2, 3]).add()
    
    canvas.edge([1, 2]).add({ directed: true })
    canvas.edges([[2, 3], [3, 1]]).add()
  python: |
    canvas.nodes([1, 2, 3]).add()
    
    canvas.edge((1, 2)).add(directed=True)
    canvas.edges([(2, 3), (3, 1)]).add()
</data>

Add labels:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.node(1).add()
        .label('animal').add({ text: 'Horse' })
    canvas.node(2).add()
        .label('animal').add({ text: 'Donkey', angle: 45 })
    canvas.node(3).add()
        .label('animal').add({ text: 'Zebra' })
    
    canvas.edge([1, 2]).add()
        .label('cross').add({ text: 'Mule' })
    canvas.edge([2, 3]).add()
        .label('cross').add({ text: 'Zebroid' })
    canvas.edge([3, 1]).add()
        .label('cross').add({ text: 'Zebroid' })
  python: |
    canvas.node(1).add() \
        .label('animal').add(text='Horse')
    canvas.node(2).add() \
        .label('animal').add(text='Donkey', angle=45)
    canvas.node(3).add() \
        .label('animal').add(text='Zebra')
    
    canvas.edge((1, 2)).add() \
        .label('cross').add(text='Mule')
    canvas.edge((2, 3)).add() \
        .label('cross').add(text='Zebroid')
    canvas.edge((3, 1)).add() \
        .label('cross').add(text='Zebroid')
</data>
