package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
)

func main() {
	file, err := os.Open("input.txt")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	scanner.Split(bufio.ScanLines)

	totalSafe := 0

	for scanner.Scan() {
		strValues := strings.Split(scanner.Text(), " ")
		values := make([]int, len(strValues))
		for i, strValue := range strValues {
			values[i], err = strconv.Atoi(strValue)

			if err != nil {
				log.Fatal(err)
			}
		}

		direction := ""
		safe := true
		for i := range values {
			if i+2 > len(values) {
				break
			}

			difference := values[i] - values[i+1]
			localDirection := "desc"

			if difference < 0 {
				localDirection = "asc"

				// Prep for difference check
				difference = -difference
			}

			if i == 0 {
				direction = localDirection
			} else if direction != localDirection {
				safe = false
				break
			}

			if difference < 1 || difference > 3 {
				safe = false
				break
			}
		}

		// fmt.Println(values, safe, direction)
		if safe {
			totalSafe += 1
		}
	}

	if err := scanner.Err(); err != nil {
		log.Fatal(err)
	}

	fmt.Println("Total safe reports:", totalSafe)
}
