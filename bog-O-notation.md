# Measuring Performance (Time Complexity - Big O)

1 million -> 1 billion roughly 10 times (performance basicaly doubles)

## Linear Time

time increases n number of times (judging performance) - trend of time

time complexity -> linear time complexity

execution time grrows linearly with (n)

## Constant Time

time it takes to execute function is always the same
number of inputs (n) has no effect on the time the algorithm takes

## Quadratic Time

O(n2) (squared)
execution time grows quadratically with (n)

## Cubic Time

## Exponential Time

execution time grows exponentially with n

# Big O Notation

O(n) Linear Time
O(1) Constant Time
O(n2) Quadratic Time (squared)
O(n3) Cubic Time (third-power)
O(2n) Exponential Time Complexity

# (Asymptotic Analysis)

count the number of expression executions.
n = 1
n = 3
n = 10
n = n

`LINEAR TIME function sumUp(num) { let result = 0; // executed 1 time for (let i = 1; i <= num; i++) { // executed 1 time result += i; // executed n times } return result // executed 1 time }`

`T = a*n + b`
`find the fastest growing term (T = [a*n] + b) // a*n`
`remove the coefficient T = n (remove all but the largest)`
`O(n)`

`CONSTANT TIME function sumUp(num) { // mathmatical formula return (num / 2) * (1 + num); // 1 } `
`T = 1`
`O(1)`

# Logarithmix Time Complexity

O(log n)
execution time grows logarithmically with (n)
