package main

import (
	"fmt"
)

func Sqrt(x float64) float64 {
	for z := x; z <= 10; z -= (z*z - x) / (2 * z) {
		fmt.Println(z)
	}
	return x
}

func main() {
	fmt.Println(Sqrt(8))
}
