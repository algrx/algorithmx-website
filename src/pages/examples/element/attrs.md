---
title: 'Attributes'
docs: ['ElementSelection.attrs']
---

Change multiple attributes at once:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.nodes([1, 2]).add({
        shape: 'rect',
        size: [12, 12]
    })
    canvas.edges([[1, 2], [1, 2, 'a'], [1, 2, 'b']]).add()
    canvas.pause(0.5)
    
    canvas.attrs({
        nodes: {
            1: { color: 'blue' },
            2: { color: 'blue' }
        },
        edges: {
            '1-2': {
                color: {
                    value: 'blue',
                    animtype: 'traverse',
                    highlight: true,
                }
            },
            '1-2-a': { color: 'blue' },
            '1-2-b': { color: 'blue' }
        }
    })
  python: |
    canvas.nodes([1, 2]).add(
        shape='rect',
        size=(12, 12)
    )
    canvas.edges([[1, 2], [1, 2, 'a'], [1, 2, 'b']]).add()
    canvas.pause(0.5)
    
    canvas.attrs(
        nodes={
            1: {'color': 'blue'},
            2: {'color': 'blue'}
        },
        edges={
            '1-2': {
                'color': {
                    'value': 'blue',
                    'animtype': 'traverse',
                    'highlight': True,
                }
            },
            '1-2-a': {'color': 'blue'},
            '1-2-b': {'color': 'blue'}
        }
    )
</data>
