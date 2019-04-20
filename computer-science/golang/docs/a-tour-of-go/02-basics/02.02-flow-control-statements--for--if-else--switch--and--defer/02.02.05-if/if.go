package main

import (
	"fmt"
	"math"
)

func sqrt(x float64) string {
	// if x < 0
	if x < 0 {
		return sqrt(-x) + "i"
	} // else
	return fmt.Sprint(math.Sqrt(x))
}

func main() {
	fmt.Println(sqrt(2), sqrt(-4))
}

// OUTPUT:
//---------
// 1.4142135623730951 2I
