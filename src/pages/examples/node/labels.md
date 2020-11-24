---
title: 'Labels'
docs: ['NodeSelection.label', 'NodeSelection.labels']
---

Display node data using multiple labels:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    const playerData = {
        1: { name: 'Sam', team: 'Panda', points: 45 },
        2: { name: 'Alice', team: 'Lion', points: 27 },
        3: { name: 'Bob', team: 'Zebra', points: 34 },
        4: { name: 'Sarah', team: 'Dolphin', points: 24 },
        5: { name: 'Maggie', team: 'Lion', points: 15 }
    }
    const [keys, values] = [
        Object.keys(playerData),
        Object.values(playerData)
    ]
    
    canvas.nodes(keys).data(values).add({
        shape: 'rect',
        size: [30, 12],
        labels: d => ({
            0: { text: d['name'] },
            team: {
                angle: 270,
                color: 'blue',
                text: 'Team: ' + d['team']
            },
            points: {
                angle: 90,
                color: 'red',
                text: 'Points: ' + d['points']
            }
        })
    })
    
    canvas.edges([[1, 2], [1, 4], [2, 3],
        [2, 5], [3, 5], [4, 5]]).add()
  python: |
    player_data = {
        1: { 'name': 'Sam', 'team': 'Panda', 'points': 45 },
        2: { 'name': 'Alice', 'team': 'Lion', 'points': 27 },
        3: { 'name': 'Bob', 'team': 'Zebra', 'points': 34 },
        4: { 'name': 'Sarah', 'team': 'Dolphin', 'points': 24 },
        5: { 'name': 'Maggie', 'team': 'Lion', 'points': 15 }
    }
    keys, values = player_data.keys(), player_data.values()
    
    canvas.nodes(keys).data(values).add(
        shape='rect',
        size=(30, 12),
        labels=lambda d: {
            0: {'text': d['name']},
            'team': {
                'angle': 270,
                'color': 'blue',
                'text': 'Team: ' + d['team']
            },
            'points': {
                'angle': 90,
                'color': 'red',
                'text': 'Points: ' + str(d['points'])
            }
        }
    )
    
    canvas.edges([(1, 2), (1, 4), (2, 3),
        (2, 5), (3, 5), (4, 5)]).add()
</data>
