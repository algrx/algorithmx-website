---
title: 'Set'
docs: ['Selection.set']
---

Configuring multiple attributes at once:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    const nodeStyle = {
      color: 'blue',
      shape: 'rect',
      size: [16, 12]
    }
    const edgeStyle = {
      color: 'red',
      svgattr: {
        'stroke-dasharray': 4
      }
    }
    
    canvas.nodes([1, 2]).add().set(nodeStyle)
    canvas.edges([[1, 2], [1, 2, 'a']]).add().set(edgeStyle)
  python: |
    node_style = {
      'color': 'blue',
      'shape': 'rect',
      'size': (16, 12)
    }
    edge_style = {
      'color': 'red',
      'svgattr': {
        'stroke-dasharray': 4
      }
    }
    
    canvas.nodes([1, 2]).add().set(node_style)
    canvas.edges([(1, 2), (1, 2, 'a')]).add().set(edge_style)
</data>
