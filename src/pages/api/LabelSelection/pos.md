---
title: 'Pos'
docs: ['LabelSelection.pos']
---

Positioning labels on a node:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    const labelStyle = {
      color: 'white',
      size: 12,
      radius: 0
    }
    const initNode = canvas.node(1).add()
      .shape('rect').size([80, 50])
    initNode.label().remove()
    
    initNode.label('title').add().set(labelStyle)
      .size(15)
      .text('Score Board')
      .align('top-middle')
      .rotate(true).angle(0)
      .pos(['-x + 8', 0])
    
    const scores = {
      Lions: 35,
      Zebras: 45,
      Dolphins: 24,
      Pandas: 29
    }
    const teams = Object.keys(scores).sort()
    
    initNode.labels(teams).add().set(labelStyle)
      .data(teams)
      .text(k => k + ': ' + scores[k])
      .align('middle-right')
      .pos((k, i) => [
        'x - 12',
        (i - (teams.length - 1) / 2) * -20
      ])
  python: |
    label_style = {
      'color': 'white',
      'size': 12,
      'radius': 0
    }
    init_node = canvas.node(1).add() \
      .shape('rect').size([80, 50])
    init_node.label().remove()
    
    init_node.label('title').add().set(label_style) \
      .size(15) \
      .text('Score Board') \
      .align('top-middle') \
      .rotate(True).angle(0) \
      .pos(('-x + 8', 0))
    
    scores = {
      'Lions': 35,
      'Zebras': 45,
      'Dolphins': 24,
      'Pandas': 29
    }
    teams = sorted(scores.keys())
    
    init_node.labels(teams).add().set(label_style) \
      .data(teams) \
      .text(lambda k: k + ': ' + str(scores[k])) \
      .align('middle-right') \
      .pos(lambda k, i: (
        'x - 12',
        (i - (len(teams) - 1) / 2) * -20
      ))
</data>

Positioning labels on an edge:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.edgelengths('individual')
    canvas.nodes([1, 2]).add()
    const initEdge = canvas.edge([1, 2]).add().length(200)
    
    const scores = {
      Lions: 35,
      Zebras: 45,
      Dolphins: 24,
      Pandas: 29
    }
    const teams = Object.keys(scores)
    
    const posAttrs = {
      Lions: { pos: [-4, 4], align: 'bottom-right' },
      Zebras: { pos: [4, 4], align: 'bottom-left' },
      Dolphins: { pos: [-4, -4], align: 'top-right' },
      Pandas: { pos: [4, -4], align: 'top-left' }
    }
    
    initEdge.labels(teams).add()
      .rotate(false).radius(0)
      .data(teams)
      .text(k => k + ': ' + scores[k])
      .set(k => posAttrs[k])
  python: |
    canvas.edgelengths('individual')
    canvas.nodes([1, 2]).add()
    init_edge = canvas.edge((1, 2)).add().length(200)
    
    scores = {
      'Lions': 35,
      'Zebras': 45,
      'Dolphins': 24,
      'Pandas': 29
    }
    teams = scores.keys()
    
    pos_attrs = {
      'Lions': { 'pos': (-4, 4), 'align': 'bottom-right' },
      'Zebras': { 'pos': (4, 4), 'align': 'bottom-left' },
      'Dolphins': { 'pos': (-4, -4), 'align': 'top-right' },
      'Pandas': { 'pos': (4, -4), 'align': 'top-left' }
    }
    
    init_edge.labels(teams).add() \
      .rotate(False).radius(0) \
      .data(teams) \
      .text(lambda k: k + ': ' + str(scores[k])) \
      .set(lambda k: pos_attrs[k])
</data>