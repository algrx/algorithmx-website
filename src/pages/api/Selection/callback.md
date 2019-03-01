---
title: 'Callback'
docs: ['Selection.callback']
---

Running a function when an animation finishes:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.nodes([1, 2, 3, 4, 5]).add()
      .pos((n, i) => [(i - 2) * 50, 0])
    canvas.pause(0.5)
    
    for (let i = 1; i < 6; i++) {
      canvas.node(i).size('1.5x').color('orange').pause(0.5)
    }
    
    canvas.callback(() => {
      // This code will only execute when the animation finishes
      canvas.label('title').add()
        .text('Animation complete')
    })
  python: |
    canvas.nodes([1, 2, 3, 4, 5]).add() \
      .pos(lambda n, i: ((i - 2) * 50, 0))
    canvas.pause(0.5)
    
    for i in range(1, 6):
        canvas.node(i).size('1.5x').color('orange').pause(0.5)
    
    def on_finished():
      # This code will only execute when the animation finishes
      canvas.label('title').add() \
        .text('Animation complete')
    
    canvas.callback(on_finished)
</data>
