---
title: 'Color'
docs: ['EdgeSelection.color']
---

Changing edge color with a standard animation:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.nodes([1, 2, 3, 4]).add()
    canvas.edges([[1, 2], [2, 3], [3, 4], [4, 1]]).add()
    canvas.pause(0.5)
    
    canvas.edge([1, 2]).color('red')
      .highlight(0).thickness(5).pause(1)
    
    canvas.edge([2, 3]).color('green')
      .highlight(0).thickness(5).pause(1)
    
    canvas.edge([3, 4]).color('blue')
      .highlight(0).thickness(5).pause(1)
    
    canvas.edge([4, 1]).color('yellow')
      .highlight(0).thickness(5).pause(1)
  python: |
    canvas.nodes([1, 2, 3, 4]).add()
    canvas.edges([(1, 2), (2, 3), (3, 4), (4, 1)]).add()
    canvas.pause(0.5)
    
    canvas.edge((1, 2)).color('red') \
      .highlight(0).thickness(5).pause(1)
    
    canvas.edge((2, 3)).color('green') \
      .highlight(0).thickness(5).pause(1)
    
    canvas.edge((3, 4)).color('blue') \
      .highlight(0).thickness(5).pause(1)
    
    canvas.edge((4, 1)).color('yellow') \
      .highlight(0).thickness(5).pause(1)
</data>
