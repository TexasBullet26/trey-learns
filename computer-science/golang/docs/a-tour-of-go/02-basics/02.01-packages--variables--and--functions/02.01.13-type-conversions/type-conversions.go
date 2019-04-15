package main

import (
	"fmt"
	"math"
)

func main() {
	x, y := 3, 4
	/* var f float64 */
	f := math.Sqrt(float64(x*x + y*y))
	/* var z uint */
	z := uint(f)
	fmt.Println(x, y, f, z)
}

// OUTPUT:
//---------
// 3 4 5 5
