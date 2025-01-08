package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"slices"
	"strconv"
)

func calc_similarity(val int, arr []int) int {
	occurences := 0
	for _, value := range arr {
		if val == value {
			occurences++
		}
	}

	similarity := val * occurences

	return similarity
}

func main() {
	file, err := os.Open("input.txt")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	scanner.Split(bufio.ScanWords)

	left := []int{}
	right := []int{}

	i := 0
	for scanner.Scan() {
		integer_value, err := strconv.Atoi(scanner.Text())

		if err != nil {
			log.Fatal(err)
		}

		if i == 0 {
			left = append(left, integer_value)
		} else {
			right = append(right, integer_value)
		}

		i = (i + 1) % 2
	}

	if err := scanner.Err(); err != nil {
		log.Fatal(err)
	}

	slices.Sort(left)
	slices.Sort(right)

	total_similarity := 0

	for _, num := range left {
		similarity := calc_similarity(num, right)
		total_similarity += similarity
	}
	fmt.Println("Total similarity:", total_similarity)
}
