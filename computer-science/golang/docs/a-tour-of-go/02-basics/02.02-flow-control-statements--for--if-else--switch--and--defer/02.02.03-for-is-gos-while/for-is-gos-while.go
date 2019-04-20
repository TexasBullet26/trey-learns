package main

import "fmt"

// DOUBLE ALGORITHM #2
func main() {
	sum := 1
	// while sum < 1000
	for sum < 1000 {
		sum += sum
	}
	fmt.Println(sum) // 1024
}

// OUTPUT:
//---------
// 1024
