package main

import "fmt"

func main() {
	answer := fib(4)
	fmt.Println("answer", answer)
}

func fib(num int) int {
	seq := []int{1, 1}
	fmt.Println("seq", seq)
	for i := num; i >= 0; i-- {
		fmt.Println("testing")
		fmt.Println("i", i)
	}
	return 1
}
