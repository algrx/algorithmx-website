---
title: 'Message'
docs: ['Canvas.message', 'Canvas.onmessage']
---

Run a function when an animation finishes:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.nodes([1, 2, 3, 4, 5]).add({
        pos: (n, i) => [(i - 2) * 50, 0]
    })
    canvas.pause(0.5)
    
    for (let i = 1; i < 6; i++) {
        canvas.node(i).size('1.5x').color('orange').pause(0.5)
    }
    
    canvas.onmessage('finished', () => {
        canvas.label('title').add({ text: 'Animation complete' })
    })
    canvas.message('finished')
  python: |
    canvas.nodes([1, 2, 3, 4, 5]).add(
        pos=lambda n, i: ((i - 2) * 50, 0)
    )
    canvas.pause(0.5)
    
    for i in range(1, 6):
        canvas.node(i).size('1.5x').color('orange').pause(0.5)
    
    def finished():
        canvas.label('title').add(text='Animation complete')
    
    canvas.onmessage('finished', finished)
    canvas.message('finished')
</data>

Send and listen for messages:

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.node('b').add({
        shape: 'rect',
        size: [40, 20],
        fixed: true,
        pos: [-80, 0],
        labels: { 0: { text: 'Broadcast\n(Click me)' } }
    })
    canvas.node('r').add({
        shape: 'rect',
        size: [40, 20],
        fixed: true,
        pos: [80, 0],
        labels: { 0: { text: 'Received' } }
    })
    
    canvas.edge(['b', 'r']).add({ directed: true })
    
    canvas.onmessage('click', () => {
        canvas.edge(['b', 'r']).highlight(0).traverse('red')
        canvas.node('r').highlight(0).color('red')
    })
    
    canvas.node('b').onclick(() => canvas.message('click'))
  python: |
    canvas.node('b').add(
        shape='rect',
        size=(40, 20),
        fixed=True,
        pos=(-80, 0),
        labels={0: {'text': 'Broadcast\n(Click me)'}}
    )
    canvas.node('r').add(
        shape='rect',
        size=(40, 20),
        fixed=True,
        pos=(80, 0),
        labels={0: {'text': 'Received'}}
    )
    
    canvas.edge(('b', 'r')).add(directed=True)
    
    def on_msg():
         canvas.edge(('b', 'r')).highlight(0).traverse('red')
         canvas.node('r').highlight(0).color('red')
    
    canvas.onmessage('click', on_msg)
    
    canvas.node('b').onclick(lambda: canvas.message('click'))
</data>
