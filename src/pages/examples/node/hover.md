---
title: 'Hover'
docs: ['NodeSelection.hoverin', 'NodeSelection.hoverout']
---

Hover over any node to reveal more information:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    function hoverIn(nodeSel) {
        nodeSel.attrs({
            size: [60, 25],
            color: 'red',
            labels: n => ({ 0: {
                visible: true,
                text: `You have hovered\nover node ${n}`
            }}),
        })
    }
    
    function hoverOut(nodeSel) {
        nodeSel.attrs({
            size: [20, 12],
            color: 'dark-gray',
            labels: { 0: { visible: false } }
        })
    }
    
    const initNodes = canvas.nodes([1, 2, 3]).add({
        shape: 'rect',
        pos: (n, i) => [(i - 1) * 100, 0]
    })
    
    initNodes.onhoverin(n => hoverIn(canvas.node(n)))
    initNodes.onhoverout(n => hoverOut(canvas.node(n)))
    hoverOut(initNodes)
  python: |
    def hover_in(node_sel):
        node_sel.attrs(
            size=(60, 25),
            color='red',
            labels=lambda n: {0: {
                'visible': True,
                'text': f'You have hovered\nover node {n}'
            }}
        )
    
    def hover_out(node_sel):
        node_sel.attrs(
            size=(20, 12),
            color='dark-gray',
            labels={0: {'visible': False}}
        )
    
    init_nodes = canvas.nodes([1, 2, 3]).add(
        shape='rect',
        pos=lambda n, i: ((i - 1) * 100, 0)
    )
    
    init_nodes.onhoverin(lambda n: hover_in(canvas.node(n)))
    init_nodes.onhoverout(lambda n: hover_out(canvas.node(n)))
    hover_out(init_nodes)
</data>
