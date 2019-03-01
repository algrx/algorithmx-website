---
title: 'Hover'
docs: ['NodeSelection.hoverin', 'NodeSelection.hoverout']
---

Hover over any node to reveal more information:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    function onHoverIn(nodeSel) {
      nodeSel.size([60, 25]).color('red')
        .label().visible(true)
          .text(n => `You have hovered\nover node ${n}`)
    }
    
    function onHoverOut(nodeSel) {
      nodeSel.size([20, 12]).color('gray')
        .label().visible(false)
    }
    
    const initNodes = canvas.nodes([1, 2, 3]).add()
      .shape('rect')
      .pos((n, i) => [(i - 1) * 100, 0])
      .hoverin(n => onHoverIn(canvas.node(n)))
      .hoverout(n => onHoverOut(canvas.node(n)))
    
    onHoverOut(initNodes)
  python: |
    canvas.nodes([1, 2, 3, 4, 5]).add() \
      .pos(lambda n, i: ((i - 2) * 50, 0))
    
    canvas.pause(0.5)
    canvas.node(1).ease('linear').size('1.5x').pause(0.5)
    canvas.node(2).ease('poly').size('1.5x').pause(0.5)
    canvas.node(3).ease('bounce').size('1.5x').pause(0.5)
    canvas.node(4).ease('back').size('1.5x').pause(0.5)
    canvas.node(5).ease('elastic-in').size('1.5x')
</data>
