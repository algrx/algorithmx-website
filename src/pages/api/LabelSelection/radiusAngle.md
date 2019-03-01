---
title: 'Radius & Angle'
docs: ['LabelSelection.radius', 'LabelSelection.angle']
---

Positioning labels using polar coordinates:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    const initNode = canvas.node(1).add()
      .size(80)
      .color('transparent')
      .svgattr('stroke', 'gray')
    initNode.label().remove()
    
    const markerAngles = Array(8).fill(0).map((n, i) => i * 360 / 8)
    const markerIds = markerAngles.map(a => 'marker-' + a)
    initNode.labels(markerIds).add()
      .data(markerAngles)
      .angle(a => a)
      .text(a => a)
    
    const pointAngles = Array(50).fill(0).map((n, i) => i * 360 / 50)
    const pointIds = pointAngles.map(a => 'point-' + a)
    initNode.labels(pointIds).add()
      .data(pointAngles)
      .angle(a => a).radius(0)
      .color('red').text('o')
    
    canvas.pause(0.5)
    for (let k = 1; k < 5; k++) {
      canvas.node(1).labels(pointIds)
        .data(pointAngles)
        .radius(a => Math.cos(k * a * Math.PI / 180) * 60)
      canvas.pause(1)
    }
  python: |
    import math
    
    init_node = canvas.node(1).add() \
      .size(80) \
      .color('transparent') \
      .svgattr('stroke', 'gray')
    init_node.label().remove()
    
    marker_angles = [i * 360 / 8 for i in range(8)]
    marker_ids = ['marker-' + str(a) for a in marker_angles]
    init_node.labels(marker_ids).add() \
      .data(marker_angles) \
      .angle(lambda a: a) \
      .text(lambda a: a)
    
    point_angles = [i * 360 / 50 for i in range(50)]
    point_ids = ['point-' + str(a) for a in point_angles]
    init_node.labels(point_ids).add() \
      .data(point_angles) \
      .angle(lambda a: a).radius(0) \
      .color('red').text('o')
    
    canvas.pause(0.5)
    for k in range(1, 5):
        canvas.node(1).labels(point_ids) \
          .data(point_angles) \
          .radius(lambda a: math.cos(k * a * math.pi / 180) * 60)
        canvas.pause(1)
</data>
