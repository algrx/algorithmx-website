---
title: 'Labels'
docs: ['NodeSelection.label', 'NodeSelection.labels']
---

Displaying node data using multiple labels:

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
    
    const initNodes = canvas.nodes(Object.keys(playerData)).add()
      .data(Object.values(playerData))
      .shape('rect')
      .size([30, 12])
    
    canvas.edges([[1, 2], [1, 4], [2, 3],
      [2, 5], [3, 5], [4, 5]]).add()
    
    initNodes.label().text(d => d['name'])
    
    initNodes.label('team').add()
      .angle(270)
      .color('blue')
      .text(d => 'Team: ' + d['team'])
    
    initNodes.label('points').add()
      .angle(90)
      .color('red')
      .text(d => 'Points: ' + d['points'])
  python: |
    player_data = {
      1: { 'name': 'Sam', 'team': 'Panda', 'points': 45 },
      2: { 'name': 'Alice', 'team': 'Lion', 'points': 27 },
      3: { 'name': 'Bob', 'team': 'Zebra', 'points': 34 },
      4: { 'name': 'Sarah', 'team': 'Dolphin', 'points': 24 },
      5: { 'name': 'Maggie', 'team': 'Lion', 'points': 15 }
    }
    
    init_nodes = canvas.nodes(player_data.keys()).add() \
      .data(player_data.values()) \
      .shape('rect') \
      .size([30, 12])
    
    canvas.edges([[1, 2], [1, 4], [2, 3],
      [2, 5], [3, 5], [4, 5]]).add()
    
    init_nodes.label().text(lambda d: d['name'])
    
    init_nodes.label('team').add() \
      .angle(270) \
      .color('blue') \
      .text(lambda d: 'Team: ' + d['team'])
    
    init_nodes.label('points').add() \
      .angle(90) \
      .color('red') \
      .text(lambda d: 'Points: ' + str(d['points']))
</data>
