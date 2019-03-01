---
title: 'Cancel'
docs: ['Selection.cancel', 'Selection.cancelall']
---

Cancelling the current traversal animation and starting a new one:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.nodes([0, 1, 2, 3, 4]).add()
      .pos((n, i) => [(i - 2) * 50, 20])
    canvas.edges([0, 1, 2, 3].map(n => [n, n + 1])).add()
    
    canvas.node('start').add()
      .shape('rect')
      .size([40, 12])
      .pos([0, -20])
      .label().text('Click to start!')
    
    function animate() {
      const color = '#' + Math.random().toString(16).substr(-6)
      const q1 = canvas.eventQ('q1')
      
      for (let i = 0; i < 4; i++) {
        q1.node(i).color(color)
        q1.edge([i, i + 1]).traverse().color(color)
        q1.pause(0.5)
      }
      q1.node(4).color(color)
    }
    
    canvas.node('start').click(() => {
      canvas.eventQ(null).cancel('q1')
      animate()
    })
  python: |
    canvas.nodes(range(5)).add() \
      .pos(lambda n, i: ((i - 2) * 50, 20))
    canvas.edges(zip(range(4), range(1, 5))).add()
    
    canvas.node('start').add() \
      .shape('rect') \
      .size([40, 12]) \
      .pos([0, -20]) \
      .label().text('Click to start!')
    
    def animate():
        color = '#{:06x}'.format(randint(0, 0xFFFFFF))
        q1 = canvas.eventQ('q1')
        
        for i in range(4):
            q1.node(i).color(color)
            q1.edge((i, i + 1)).traverse().color(color)
            q1.pause(0.5)
        q1.node(4).color(color)
    
    def on_click():
        canvas.eventQ(None).cancel('q1')
        animate()
    canvas.node('start').click(on_click)
