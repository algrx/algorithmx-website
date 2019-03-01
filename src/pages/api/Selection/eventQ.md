---
title: 'Event Queue'
docs: ['Selection.eventQ']
---

Using multiple event queues for simultaneous animations:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.nodes([1, 2, 3]).add()
    canvas.edges([[1, 2], [2, 3], [3, 1]]).add()
    canvas.pause(0.5)
    
    const q1 = canvas.eventQ(1).pause(0.5)
    q1.edge([1, 2]).traverse().color('red').pause(1)
    q1.edge([2, 3]).traverse().color('red').pause(1)
    q1.edge([3, 1]).traverse().color('red')
    
    const q2 = canvas.eventQ(2).pause(0.5)
    q2.edge([2, 3]).traverse().color('blue').pause(1)
    q2.edge([3, 1]).traverse().color('blue').pause(1)
    q2.edge([1, 2]).traverse().color('blue')
    
    const q3 = canvas.eventQ(3).pause(0.5)
    q3.edge([3, 1]).traverse().color('green').pause(1)
    q3.edge([1, 2]).traverse().color('green').pause(1)
    q3.edge([2, 3]).traverse().color('green')
  python: |
    canvas.nodes([1, 2, 3]).add()
    canvas.edges([(1, 2), (2, 3), (3, 1)]).add()
    canvas.pause(0.5)
    
    const q1 = canvas.eventQ(1).pause(0.5)
    q1.edge((1, 2)).traverse().color('red').pause(1)
    q1.edge((2, 3)).traverse().color('red').pause(1)
    q1.edge((3, 1)).traverse().color('red')
    
    const q2 = canvas.eventQ(2).pause(0.5)
    q2.edge((2, 3)).traverse().color('blue').pause(1)
    q2.edge((3, 1)).traverse().color('blue').pause(1)
    q2.edge((1, 2)).traverse().color('blue')
    
    const q3 = canvas.eventQ(3).pause(0.5)
    q3.edge((3, 1)).traverse().color('green').pause(1)
    q3.edge((1, 2)).traverse().color('green').pause(1)
    q3.edge((2, 3)).traverse().color('green')
</data>
