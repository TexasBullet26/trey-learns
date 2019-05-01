package main

import "fmt"

func main() {
	sum := 0
	for i := 0; i < 10; i++ {
		sum += i
	} /* 0 1 2 3 4 5 6 7 8 9 */

	fmt.Println(sum) /* 0->1->3->6->10->15->21->28->36->45 */
}

// OUTPUT:
//---------
// 45
