---
title: 'Flip'
docs: ['EdgeSelection.flip']
---

Prevent edges from 'flipping' when upside-down, allowing labels to maintain their position and orientation:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.nodes([1, 2, 3, 4, 5]).add()
    
    const edges = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 1]]
    canvas.edges(edges).add({
        flip: false,
        labels: {
            1: { text: 'inner' },
            2: { text: 'outer' }
        }
    })
  python: |
    canvas.nodes([1, 2, 3, 4, 5]).add()
    
    edges = [(1, 2), (2, 3), (3, 4), (4, 5), (5, 1)]
    canvas.edges(edges).add(
        flip=False,
        labels={
            1: {'text': 'inner'},
            2: {'text': 'outer'}
        }
    )
</data>
