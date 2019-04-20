package main

import "fmt"

/* DOUBLE ALGORITHM */
func main() {
	sum := 1
	for sum < 1000 {
		sum += sum /* 2->4->8->16->32->64->128->256->...1024 */
	}
	fmt.Println(sum) // 1024
}

// OUTPUT:
//---------
// 1024
