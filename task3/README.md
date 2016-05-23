# algos
Algorithms Practices

## Task 3

Calcular los movimientos saltos de un caballo que esta en (0,0) en un tablero infinito. Si se pasaba de cierto limite 1000000 devolver un -2, si era imposible devolver un -1.

```
Se me ocurrio hacer una grilla

[2,1,4]
[3,3,1]
[0,3,2] // caballo esta en 0

Considere una grilla adyacente

[2,1,4][3,2,3]
[3,2,1][2,3,4]
[0,3,2][3,2,3]

Deberia haber considerado mas
[3,4,3] [4,3,4]
[2,3,2] [3,4,3]
[3,2,3] [2,3,4]
---------------
[2,1,4] [3,2,3]
[3,2,1] [2,3,4]
[0,3,2] [3,2,3]

```

Al parecer ya habia una formula bastante facil :D
http://stackoverflow.com/a/8778592/467034
