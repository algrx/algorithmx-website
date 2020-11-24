---
title: 'Data'
docs: ['ElementSelection.data']
---

Using data binding to configure attributes:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    const posData = [[-80, 40], [80, 40], [-80, -40], [80, -40]]
    canvas.nodes([1, 2, 3, 4]).add()
        .data(posData).pos(p => p)
        .labels([1, 2]).add()
            .data(['label 1', 'label 2']).text(t => t)
    
    canvas.pause(0.5)
    
    // Binding data to nodes
    canvas.nodes([1, 2])
        .data(['red', 'blue'])
        .labels([1, 2])
            .color(c => c)
    
    // Binding data to labels
    canvas.nodes([3, 4])
        .labels([1, 2])
            .data(['red', 'blue'])
            .color(c => c)
  python: |
    pos_data = [(-80, 40), (80, 40), (-80, -40), (80, -40)]
    canvas.nodes([1, 2, 3, 4]).add() \
        .data(pos_data).pos(lambda p: p) \
        .labels([1, 2]).add() \
            .data(['label 1', 'label 2']).text(lambda t: t)
    
    canvas.pause(0.5)
    
    # Binding data to nodes
    canvas.nodes([1, 2]) \
        .data(['red', 'blue']) \
        .labels([1, 2]) \
            .color(lambda c: c)
    
    # Binding data to labels
    canvas.nodes([3, 4]) \
        .labels([1, 2]) \
            .data(['red', 'blue']) \
            .color(lambda c: c)
</data>
