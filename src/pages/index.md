---
title: 'AlgorithmX'
---

<img src='https://raw.githubusercontent.com/algrx/algorithmx/master/img/logo.svg?sanitize=true' align='left' style='padding-right: 12px' width='70px'>

<h1 style='padding-top: 8px'>AlgorithmX</h1>

AlgorithmX is a library for network visualization and algorithm simulation, available in the following languages:

- <a href='https://github.com/algrx/algorithmx'>JavaScript</a> (incl. TypesScript)
- <a href='https://github.com/algrx/algorithmx-python'>Python</a> (incl. Jupyter Notebooks)

On the client side, AlgorithmX uses <a href='https://github.com/d3/d3'>D3</a> and <a href='https://github.com/tgdwyer/WebCola'>WebCola</a> to render networks.

## Example Usage

<data type='yaml'>
type: algorithmx-example
code:
  js: |
    canvas.nodes([1, 2, 3, 4, 5, 6, 7]).add()
    canvas.edges([[1, 2], [2, 3], [3, 4], [4, 5],
      [5, 6], [6, 7], [1, 3], [2, 4], [2, 7]]).add()
    
    for (let i = 1; i < 8; i++) {
      canvas.pause(0.5)
      canvas.node(i).color('green').highlight().size('1.25x')
      
      if (i < 8) {
        canvas.pause(0.5)
        canvas.edge([i, i+1]).traverse().color('green')
      }
    }
  python: |
    canvas.nodes(range(1, 8)).add()
    canvas.edges([(i, i+1) for i in range(1, 7)]
               + [(1, 3), (2, 4), (2, 7)]).add()
    
    for i in range(1, 8):
        canvas.pause(0.5)
        canvas.node(i).color('green').highlight().size('1.25x')
        
        if i < 8:
            canvas.pause(0.5)
            canvas.edge((i, i+1)).traverse().color('green')
</data>

## Credits
AlgorithmX was developed by <a href='https://github.com/alexsocha'>Alex Socha</a> with support from <a href='https://www.monash.edu/it'>Monash University</a>.
