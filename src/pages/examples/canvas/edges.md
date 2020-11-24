---
title: 'Edges'
docs: ['Canvas.edge', 'Canvas.edges']
---

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.nodes([1, 2, 3, 4]).add()
    canvas.pause(0.5)
    
    for (let i = 1; i < 5; i++) {
        for (let j = 1; j < i; j++) {
            canvas.edge([i, j]).add()
            canvas.pause(0.2)
        }
    }
    
    const path = [1, 2, 3, 4, 1, 3]
    for (let i = 0; i < path.length - 1; i++) {
        canvas.pause(0.5)
        canvas.edge([path[i], path[i + 1]]).traverse('orange')
    }
    
    canvas.pause(1).edge([2, 4]).remove()
  python: |
    canvas.nodes([1, 2, 3, 4]).add()
    canvas.pause(0.5)
    
    for i in range(1, 5):
        for j in range(1, i):
            canvas.edge((i, j)).add()
            canvas.pause(0.2)
    
    path = [1, 2, 3, 4, 1, 3]
    for i in range(len(path) - 1):
        canvas.pause(0.5)
        canvas.edge([path[i], path[i + 1]]).traverse('orange')
    
    canvas.pause(1).edge([2, 4]).remove()
</data>
