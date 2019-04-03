---
title: 'Font'
docs: ['LabelSelection.font']
---

Labels with custom fonts:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    const initNode = canvas.node(1).add()
        .shape('rect').size([30, 30])
    
    initNode.label().text('Custom\nFonts')
    initNode.label(1).add().text('Times').font('Times')
    initNode.label(2).add().text('Courier').font('Courier')
    initNode.label(3).add().text('Verdana').font('Verdana')
    initNode.label(4).add().text('Impact').font('Impact')
  python: |
    init_node = canvas.node(1).add()
        .shape('rect').size((30, 30))
    
    init_node.label().text('Custom\nFonts')
    init_node.label(1).add().text('Times').font('Times')
    init_node.label(2).add().text('Courier').font('Courier')
    init_node.label(3).add().text('Verdana').font('Verdana')
    init_node.label(4).add().text('Impact').font('Impact')
</data>
