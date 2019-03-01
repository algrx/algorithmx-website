---
title: 'Labels'
docs: ['CanvasSelection.label', 'CanvasSelection.labels']
---

Adding and manipulating labels on the canvas:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    const animateText = (label, text) =>
      label.visible(false).pause(0.5)
        .text(text).visible(true).pause(0.5)
    
    const labelTitle = canvas.label('title')
    labelTitle.add().pos([0, '0.5cy']).text('')
    
    canvas.node(1).add().pos([-10, 0])
    canvas.node(2).add().pos([10, 0])
    canvas.edge([1, 2]).add()
    
    animateText(labelTitle, 'Start at node 1')
    canvas.node(1).color('green').highlight().size('1.2x')
    canvas.pause(1.5)
    
    animateText(labelTitle, 'Traverse edge (1, 2)')
    canvas.edge([1, 2]).traverse().color('blue')
    canvas.pause(1.5)
    
    animateText(labelTitle, 'End at node 2')
    canvas.node(2).color('red').highlight().size('1.2x')
  python: |
    def animate_text(label, text):
        label.visible(False).pause(0.5)
          .text(text).visible(True).pause(0.5)
    
    label_title = canvas.label('title')
    label_title.add().pos((0, '0.5cy')).text('')
    
    canvas.node(1).add().pos((-10, 0))
    canvas.node(2).add().pos((10, 0))
    canvas.edge([1, 2]).add()
    
    animate_text(label_title, 'Start at node 1')
    canvas.node(1).color('green').highlight().size('1.2x')
    canvas.pause(1.5)
    
    animate_text(label_title, 'Traverse edge (1, 2)')
    canvas.edge((1, 2)).traverse().color('blue')
    canvas.pause(1.5)
    
    animate_text(label_title, 'End at node 2')
    canvas.node(2).color('red').highlight().size('1.2x')
</data>
