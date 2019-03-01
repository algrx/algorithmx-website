---
title: 'Highlight'
docs: ['Selection.highlight']
---

Temporarily changing ('highlighting') attributes:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.nodes([1, 2, 3, 4, 5]).add()
    canvas.edges([[1, 2], [2, 3], [3, 4], [4, 5], [5, 1]]).add()
    canvas.pause(0.5)
    
    for (let i = 1; i < 6; i++) {
      canvas.node(i).highlight().color('orange')
      canvas.pause(0.5)
      
      if (i < 6) {
        canvas.edge([i, i + 1]).highlight(0)
          .traverse().color('yellow')
      }
    }
  python: |
    canvas.nodes([1, 2, 3, 4, 5]).add()
    canvas.edges([(1, 2), (2, 3), (3, 4), (4, 5), (5, 1)]).add()
    canvas.pause(0.5)
    
    for i in range(1, 6):
        canvas.node(i).highlight().color('orange')
        canvas.pause(0.5)
        
        if i < 6:
            canvas.edge((i, i + 1)).highlight(0)
              .traverse().color('yellow')
</data>
