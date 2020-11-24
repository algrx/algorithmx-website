---
title: 'Pos'
docs: ['LabelSelection.pos']
---

Position labels on a node:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    const scores = {
        Lions: 35,
        Zebras: 45,
        Dolphins: 24,
        Pandas: 29
    }
    const teams = Object.keys(scores).sort()
    
    canvas.node(1).add({
        shape: 'rect',
        size: [80, 50],
        labels: {
            0: { remove: true },
            title: {
                text: 'Score Board',
                color: 'white',
                size: 12,
                radius: 0,
                angle: 0,
                size: 15,
                align: 'top-middle',
                rotate: true,
                pos: ['-x + 8', 0]
            }
        }
    }).labels(teams).data(teams).add({
        text: k => `${k}: ${scores[k]}`,
        color: 'white',
        size: 12,
        radius: 0,
        align: 'middle-right',
        pos: (_, i) => [
            'x - 12',
            (i - (teams.length - 1) / 2) * -20
        ]
    })
  python: |
    scores = {
        'Lions': 35,
        'Zebras': 45,
        'Dolphins': 24,
        'Pandas': 29
    }
    teams = scores.keys()
    
    canvas.node(1).add(
        shape='rect',
        size=(80, 50),
        labels={
            0: {'remove': True},
            'title': {
                'text': 'Score Board',
                'color': 'white',
                'size': 12,
                'radius': 0,
                'angle': 0,
                'size': 15,
                'align': 'top-middle',
                'rotate': True,
                'pos': ('-x + 8', 0)
            }
        }
    ).labels(teams).data(teams).add(
        text=lambda k: f'{k}: {scores[k]}',
        color='white',
        size=12,
        radius=0,
        align='middle-right',
        pos=lambda _, i: (
            'x - 12',
            (i - (len(teams) - 1) / 2) * -20
        )
    )
</data>

Position labels on an edge:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    const scores = {
        Lions: 35,
        Zebras: 45,
        Dolphins: 24,
        Pandas: 29
    }
    const teams = Object.keys(scores)
    
    const posAttrs = {
        Lions: { pos: [-4, 4], align: 'bottom-right' },
        Zebras: { pos: [4, 4], align: 'bottom-left' },
        Dolphins: { pos: [-4, -4], align: 'top-right' },
        Pandas: { pos: [4, -4], align: 'top-left' }
    }
    
    canvas.edgelayout('individual')
    canvas.nodes([1, 2]).add()
    
    canvas.edge([1, 2]).add({
        length: 200
    }).labels(teams).data(teams).add(k => ({
        ...posAttrs[k],
        text: k + ': ' + scores[k],
        rotate: false,
        radius: 0
    }))
  python: |
    scores = {
        'Lions': 35,
        'Zebras': 45,
        'Dolphins': 24,
        'Pandas': 29
    }
    teams = scores.keys()
    
    pos_attrs = {
        'Lions': { 'pos': (-4, 4), 'align': 'bottom-right' },
        'Zebras': { 'pos': (4, 4), 'align': 'bottom-left' },
        'Dolphins': { 'pos': (-4, -4), 'align': 'top-right' },
        'Pandas': { 'pos': (4, -4), 'align': 'top-left' }
    }
    
    canvas.edgelayout('individual')
    canvas.nodes([1, 2]).add()
    
    canvas.edge([1, 2]).add(
        length=200
    ).labels(teams).data(teams).add(lambda k: {
        **pos_attrs[k],
        'text': f'{k}: {scores[k]}',
        'rotate': False,
        'radius': 0
    })
</data>
