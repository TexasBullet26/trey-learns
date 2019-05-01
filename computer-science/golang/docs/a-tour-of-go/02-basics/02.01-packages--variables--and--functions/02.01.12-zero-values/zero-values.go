package main

import "fmt"

var (
	i int
	f float64
	b bool
	s string
)

func main() {
	fmt.Printf("%v %v %v %q\n", i, f, b, s)
}

// OUTPUT:
//---------
// 0 0 false ""
