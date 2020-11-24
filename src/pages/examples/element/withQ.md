---
title: 'With Queue'
docs: ['ElementSelection.withQ']
---

Use multiple event queues for simultaneous animations:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.nodes([1, 2, 3]).add()
    canvas.edges([[1, 2], [2, 3], [3, 1]]).add()
    canvas.pause(0.5)
    
    const q1 = canvas.withQ(1).duration(1.5).pause(0.5)
    q1.edge([1, 2]).traverse('red').pause(1.5)
    q1.edge([2, 3]).traverse('red').pause(1.5)
    q1.edge([3, 1]).traverse('red')
    
    const q2 = canvas.withQ(2).duration(1.5).pause(0.5)
    q2.edge([2, 3]).traverse('blue').pause(1.5)
    q2.edge([3, 1]).traverse('blue').pause(1.5)
    q2.edge([1, 2]).traverse('blue')
    
    const q3 = canvas.withQ(3).duration(1.5).pause(0.5)
    q3.edge([3, 1]).traverse('green').pause(1.5)
    q3.edge([1, 2]).traverse('green').pause(1.5)
    q3.edge([2, 3]).traverse('green')
  python: |
    canvas.nodes([1, 2, 3]).add()
    canvas.edges([(1, 2), (2, 3), (3, 1)]).add()
    canvas.pause(0.5)
    
    q1 = canvas.withQ(1).duration(1.5).pause(0.5)
    q1.edge((1, 2)).traverse('red').pause(1.5)
    q1.edge((2, 3)).traverse('red').pause(1.5)
    q1.edge((3, 1)).traverse('red')
    
    q2 = canvas.withQ(2).duration(1.5).pause(0.5)
    q2.edge((2, 3)).traverse('blue').pause(1.5)
    q2.edge((3, 1)).traverse('blue').pause(1.5)
    q2.edge((1, 2)).traverse('blue')
    
    q3 = canvas.withQ(3).duration(1.5).pause(0.5)
    q3.edge((3, 1)).traverse('green').pause(1.5)
    q3.edge((1, 2)).traverse('green').pause(1.5)
    q3.edge((2, 3)).traverse('green')
</data>
