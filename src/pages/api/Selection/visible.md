---
title: 'Visible'
docs: ['Selection.visible']
---

Adding invisible edges and changing the text of a label using a visibility animation:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.node(0).add().shape('rect').size([40, 12])
      .label().add().text('[ ]')
    canvas.pause(0.5)
    
    for (let i = 1; i < 5; i++) {
      canvas.node(i).add()
      canvas.edge([i, 0]).add().visible(false)
      canvas.pause(0.5)
      
      canvas.node(0).label()
        .visible(false).pause(0.5)
        .text(`[${Array(i).fill(0)
          .map((v, j) => j + 1).join(', ')}]`)
        .visible(true)
      
      canvas.pause(1)
    }
  python: |
    canvas.node(0).add().shape('rect').size((40, 12)) \
      .label().add().text('[ ]')
    canvas.pause(0.5)
    
    for i in range(1, 5):
        canvas.node(i).add()
        canvas.edge((i, 0)).add().visible(False)
        canvas.pause(0.5)
        
        canvas.node(0).label() \
          .visible(False).pause(0.5) \
          .text(str(list(range(1, i + 1)))) \
          .visible(True)
        
        canvas.pause(1)
</data>
