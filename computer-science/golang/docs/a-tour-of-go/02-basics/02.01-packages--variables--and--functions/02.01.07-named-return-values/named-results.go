package main

import "fmt"

func split(sum int) (x, y int) {
	x = sum * 4 / 9 // x = 17*4/9 = 7
	y = sum - x     // y = 17-7 = 10
	return          // the return statement w/o arguments returns the named return values. This is known as a "naked" return
	// naked return statements should be used only in short functions, as with the example shown here. They can harm readability in longer functions.
}

func main() {
	fmt.Println(split(17))
}

// OUTPUT:
//---------
// 7 10
