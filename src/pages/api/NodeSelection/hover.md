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
      nodeSel.size([20, 12]).color('dark-gray')
        .label().visible(false)
    }
    
    const initNodes = canvas.nodes([1, 2, 3]).add()
      .shape('rect')
      .pos((n, i) => [(i - 1) * 100, 0])
      .hoverin(n => onHoverIn(canvas.node(n)))
      .hoverout(n => onHoverOut(canvas.node(n)))
    
    onHoverOut(initNodes)
  python: |
    def on_hover_in(node_sel):
        node_sel.size([60, 25]).color('red') \
            .label().visible(True) \
                .text(lambda n: 'You have hovered\n' \
                  + 'over node {}'.format(n))
    
    def on_hover_out(node_sel):
        node_sel.size([20, 12]).color('dark-gray') \
            .label().visible(False)
    
    init_nodes = canvas.nodes([1, 2, 3]).add() \
        .shape('rect') \
        .pos(lambda n, i: ((i - 1) * 100, 0)) \
        .hoverin(lambda n: on_hover_in(canvas.node(n))) \
        .hoverout(lambda n: on_hover_out(canvas.node(n)))
    
    on_hover_out(init_nodes)
</data>
