package main

import "fmt"

func add(x int, y int) int {
	return x + y
}

func mult(a int, b int) int {
	return a * b
}

func divide(c int, d int) int {
	return c / d
}

func main() {
	fmt.Println(add(42, 13))
	fmt.Println(mult(5, 5))
	fmt.Println(divide(10, 5))
}

// OUTPUT:
//---------
// 55
// 25
// 2
