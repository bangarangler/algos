package main

import "fmt"

func main() {
	answer := fib(4)
	// answer := fib()
	// fmt.Println("answer", answer(), answer(), answer(), answer(), answer())
	fmt.Println("answer", answer)
}

func fib(num int) int {
	seq := []int{1, 1}
	for i := 0; i < num; i++ {
		seq = append(seq, (seq[i] + seq[i+1]))
	}
	return seq[num]
}

// func fib() func() int {
// 	a, b := 0, 1
// 	return func() int {
// 		a, b = b, a+b
// 		return a
// 	}
// }
