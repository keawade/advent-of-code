package main

import (
	"io/ioutil"
	"strconv"
	"strings"
)

func main() {
	// Read input
	b, err := ioutil.ReadFile("./input.txt")
	if err != nil {
		print(err)
	}

	// Prep instructions
	instructions := strings.Split(string(b), "\n")

	// Prep grid
	var grid [1000][1000]bool

	for _, instruction := range instructions {
		parts := strings.Split(instruction, " ")

		start := parts[len(parts)-3]
		end := parts[len(parts)-1]

		startx, _ := strconv.ParseInt(strings.Split(start, ",")[0], 10, 64)
		endx, _ := strconv.ParseInt(strings.Split(start, ",")[1], 10, 64)
		starty, _ := strconv.ParseInt(strings.Split(end, ",")[0], 10, 64)
		endy, _ := strconv.ParseInt(strings.Split(end, ",")[1], 10, 64)

		if parts[0] == "toggle" {
			for x, column := range grid {
				if x >= int(startx) && x <= int(endx) {
					for y := range column {
						if y >= int(starty) && y <= int(endy) {
							grid[x][y] = !grid[x][y]
						}
					}
				}
			}
		} else {
			for x, column := range grid {
				if x >= int(startx) && x <= int(endx) {
					for y := range column {
						if y >= int(starty) && y <= int(endy) {
							grid[x][y] = parts[1] == "on"
						}
					}
				}
			}
		}

	}
	lit := 0
	for _, column := range grid {
		for _, light := range column {
			if light {
				lit++
			}
		}
	}
	println(lit)
}
