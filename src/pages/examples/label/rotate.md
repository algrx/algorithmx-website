---
title: 'Rotate'
docs: ['LabelSelection.rotate']
---

Simulate a clock with rotating labels:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    const initNode = canvas.node('clock').add({
        size: 50,
        labels: { 0: { remove: true } }
    })
    
    initNode.labels(['h', 's']).add({
        color: 'white',
        size: 12,
        radius: 0,
        angle: 90,
        align: 'bottom-middle',
        rotate: true
    })
    initNode.labels(['h', 's'])
        .data(['/\\\n|', '/\\\n|\n|'])
        .text(t => t)
    
    const labelIds = Array(12).fill(0).map((n, i) => i + 1)
    initNode.labels(labelIds).data(labelIds).add({
        text: n => n,
        angle: n => (n - 3) * -30,
        rotate: true
    })
    
    canvas.pause(0.3)
    for (let i of labelIds) {
        for (let j of labelIds) {
            canvas.pause(0.2)
            canvas.node('clock').label('s')
                .duration(0.2)
                .angle((j - 3) * -30)
        }
        canvas.node('clock').label('h').angle((i - 3) * -30)
    }
  python: |
    init_node = canvas.node('clock').add(
        size=50,
        labels={0: {'remove': True}}
    )
    
    init_node.labels(['h', 's']).add(
        color='white',
        size=12,
        radius=0,
        angle=90,
        align='bottom-middle',
        rotate=True
    )
    init_node.labels(['h', 's']) \
        .data(['/\\\n|', '/\\\n|\n|']) \
        .text(lambda t: t)
    
    init_node.labels(range(1, 13)).data(range(1, 13)).add(
        text=lambda n: n,
        angle=lambda n: (n - 3) * -30,
        rotate=True
    )
    
    canvas.pause(0.3)
    for i in range(1, 13):
        for j in range(1, 13):
            canvas.pause(0.2)
            canvas.node('clock').label('s') \
                .duration(0.2) \
                .angle((j - 3) * -30)
        
        canvas.node('clock').label('h').angle((i - 3) * -30)
</data>
