---
title: 'SVG Attributes'
docs: ['LabelSelection.svgattr']
---

Set text decoration using SVG attributes:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.label(1).add({
        text: 'underline',
        size: 20,
        pos: [0, '0.5cy'],
        svgattrs: { 'text-decoration': 'underline' }
    })
    
    canvas.label(2).add({
        text: 'line-through',
        size: 20,
        pos: [0, 0],
        svgattrs: { 'text-decoration': 'line-through' }
    })
    
    canvas.label(3).add({
        text: 'overline',
        size: 20,
        pos: [0, '-0.5cy'],
        svgattrs: { 'text-decoration': 'overline' }
    })
  python: |
    canvas.label(1).add(
        text='underline',
        size=20,
        pos=(0, '0.5cy'),
        svgattrs={'text-decoration': 'underline'}
    )
    
    canvas.label(2).add(
        text='line-through',
        size=20,
        pos=(0, 0),
        svgattrs={'text-decoration': 'line-through'}
    )
    
    canvas.label(3).add(
        text='overline',
        size=20,
        pos=(0, '-0.5cy'),
        svgattrs={'text-decoration': 'overline'}
    )
</data>
