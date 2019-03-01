---
title: 'Broadcast & Listen'
docs: ['Selection.broadcast', 'Selection.listen']
---

Listening for a broadcast message:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    const nodeStyle = {
      shape: 'rect',
      size: [40, 20],
      fixed: true
    }
    canvas.node('b').add().set(nodeStyle).pos([-80, 0])
      .label().text('Broadcast\n(Click me)')
    
    canvas.node('r').add().set(nodeStyle).pos([80, 0])
      .label().text('Received')
    
    canvas.edge(['b', 'r']).add().directed(true)
    
    canvas.listen('message', () => {
      canvas.edge(['b', 'r']).highlight(0).traverse().color('red')
      canvas.node('r').highlight(0).color('red')
    })
    
    canvas.node('b').click(() => canvas.broadcast('message'))
  python: |
    node_style = {
      'shape': 'rect',
      'size': (40, 20),
      'fixed': True
    }
    canvas.node('b').add().set(node_style).pos((-80, 0)) \
      .label().text('Broadcast\n(Click me)')
    
    canvas.node('r').add().set(node_style).pos((80, 0)) \
      .label().text('Received')
    
    canvas.edge(('b', 'r')).add().directed(True)
    
    def on_msg():
         canvas.edge(('b', 'r')).highlight(0).traverse().color('red')
         canvas.node('r').highlight(0).color('red')
    
    canvas.listen('message', on_msg)
    
    canvas.node('b').click(lambda: canvas.broadcast('message'))
</data>
