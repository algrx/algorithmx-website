---
title: 'Radius & Angle'
docs: ['LabelSelection.radius', 'LabelSelection.angle']
---

Position labels using polar coordinates:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    const markerAngles = Array(8).fill(0).map((n, i) => i * 360 / 8)
    const markerIds = markerAngles.map(a => 'marker-' + a)
    
    const pointAngles = Array(50).fill(0).map((n, i) => i * 360 / 50)
    const pointIds = pointAngles.map(a => 'point-' + a)
    
    const initNode = canvas.node(1).add({
        size: 80,
        color: 'transparent',
        svgattrs: { stroke: 'gray' },
        labels: { 0: { remove: true } }
    })
    
    initNode.labels(markerIds).data(markerAngles).add({
        text: a => a,
        angle: a => a,
    })
    initNode.labels(pointIds).data(pointAngles).add({
        text: 'o',
        angle: a => a,
        radius: 0,
        color: 'red'
    })
    
    canvas.pause(0.5)
    for (let k = 1; k < 5; k++) {
        canvas.node(1).labels(pointIds)
            .data(pointAngles)
            .radius(a => Math.cos(k * a * Math.PI / 180) * 60)
        canvas.pause(1)
    }
  python: |
    import math
    
    marker_angles = [i * 360 / 8 for i in range(8)]
    marker_ids = ['marker-' + str(a) for a in marker_angles]
    
    point_angles = [i * 360 / 50 for i in range(50)]
    point_ids = ['point-' + str(a) for a in point_angles]
    
    init_node = canvas.node(1).add(
        size=80,
        color='transparent',
        svgattrs={'stroke': 'gray'},
        labels={0: {'remove': True}}
    )
    
    init_node.labels(marker_ids).data(marker_angles).add(
        angle=lambda a: a,
        text=lambda a: a
    )
    init_node.labels(point_ids).data(point_angles).add(
        text='o',
        angle=lambda a: a,
        radius=0,
        color='red'
    )
    
    canvas.pause(0.5)
    for k in range(1, 5):
        canvas.node(1).labels(point_ids) \
            .data(point_angles) \
            .radius(lambda a: math.cos(k * a * math.pi / 180) * 60)
        canvas.pause(1)
</data>
