package main

import "fmt"

// variables i and j are both declared integers. Initialized i = 1, j = 2
var i, j int = 1, 2

func main() {
	// variables c, python, and java are initialized. c = true, python = false, java = "no!"
	var c, python, java = true, false, "no!"
	fmt.Println(i, j, c, python, java)
}

// OUTPUT:
//---------
// 1 2 true false no!
