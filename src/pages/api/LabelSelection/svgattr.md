---
title: 'SVG Attributes'
docs: ['LabelSelection.svgattr']
---

Setting text decoration with SVG attributes:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.label(1).add()
      .size(20)
      .pos([0, '0.5cy'])
      .text('underline')
      .svgattr('text-decoration', 'underline')
    
    canvas.label(2).add()
      .size(20)
      .pos([0, 0])
      .text('line-through')
      .svgattr('text-decoration', 'line-through')
    
    canvas.label(3).add()
      .size(20)
      .pos([0, '-0.5cy'])
      .text('overline')
      .svgattr('text-decoration', 'overline')
  python: |
    canvas.label(1).add() \
      .size(20) \
      .pos((0, '0.5cy')) \
      .text('underline') \
      .svgattr('text-decoration', 'underline')
    
    canvas.label(2).add() \
      .size(20) \
      .pos((0, 0)) \
      .text('line-through') \
      .svgattr('text-decoration', 'line-through')
    
    canvas.label(3).add() \
      .size(20) \
      .pos((0, '-0.5cy')) \
      .text('overline') \
      .svgattr('text-decoration', 'overline')
</data>
