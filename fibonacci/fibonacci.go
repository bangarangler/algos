package main

import "fmt"

func main() {
	answer := fib(6)
	// answer := fib()
	// fmt.Println("answer", answer(), answer(), answer(), answer(), answer())
	fmt.Println("answer", answer)
}

func fib(num int) int {
	seq := []int{1, 1}
	for i := 0; i < num; i++ {
		fmt.Println("seq", seq)
		seq = append(seq, (seq[i] + seq[i+1]))
		// 1 + 1 = 2
		// 1 + 2 = 3
		// 2 + 3 = 5
		// 3 + 5 = 8
		// 5 + 8 = 13
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
