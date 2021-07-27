package main

import (
	"fmt"
	"math"
)

// Primality Test

// return true or false if number is prime

func main() {
	answer := isPrime(5)
	answer1 := isPrime(9)
	fmt.Println("answer", answer)
	fmt.Println("answer1", answer1)
}

func isPrime(num int) bool {
	fmt.Println("num", num)
	for i := num - 1; i > 2; i-- {
		fmt.Println("i", i)
		if num%i == 0 {
			return false
		}
	}
	return true
}

func checkPrimeNumber(num int) {
	if num < 2 {
		fmt.Println("Number must be greater than 2.")
		return
	}
	sq_root := int(math.Sqrt(float64(num)))
	for i := 2; i <= sq_root; i++ {
		if num%i == 0 {
			fmt.Println("Non Prime Number")
			return
		}
	}
	fmt.Println("Prime Number")
	return
}
