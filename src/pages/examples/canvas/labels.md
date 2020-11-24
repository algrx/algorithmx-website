---
title: 'Labels'
docs: ['Canvas.label', 'Canvas.labels']
---

Adding and manipulating labels on the canvas:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    const animateText = (label, text) =>
        label
            .visible(false)
            .pause(0.5)
            .text(text)
            .visible(true)
            .pause(0.4)
    
    const titleLabel = canvas.label('title')
    titleLabel.add({ pos: [0, '0.5cy'], text: '' })
    
    canvas.node(1).add({ pos: [-10, 0] })
    canvas.node(2).add({ pos: [10, 0] })
    canvas.edge([1, 2]).add()
    
    animateText(titleLabel, 'Start at node 1')
    canvas.node(1).color('green').highlight().size('1.2x')
    canvas.pause(1.5)
    
    animateText(titleLabel, 'Traverse edge (1, 2)')
    canvas.edge([1, 2]).traverse('blue')
    canvas.pause(1.5)
    
    animateText(titleLabel, 'End at node 2')
    canvas.node(2).color('red').highlight().size('1.2x')
  python: |
    def animate_text(label, text):
        label \
            .visible(False) \
            .pause(0.5) \
            .text(text) \
            .visible(True) \
            .pause(0.5)
    
    title_label = canvas.label('title')
    title_label.add().pos((0, '0.5cy')).text('')
    
    canvas.node(1).add(pos=(-10, 0))
    canvas.node(2).add(pos=(10, 0))
    canvas.edge([1, 2]).add()
    
    animate_text(title_label, 'Start at node 1')
    canvas.node(1).color('green').highlight().size('1.2x')
    canvas.pause(1.5)
    
    animate_text(title_label, 'Traverse edge (1, 2)')
    canvas.edge((1, 2)).traverse('blue')
    canvas.pause(1.5)
    
    animate_text(title_label, 'End at node 2')
    canvas.node(2).color('red').highlight().size('1.2x')
</data>
