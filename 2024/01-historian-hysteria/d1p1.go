package main

import (
	"bufio"
	"errors"
	"fmt"
	"log"
	"os"
	"slices"
	"strconv"
)

type pair struct {
	left, right int
}

func zip(a, b []int) ([]pair, error) {
	if len(a) != len(b) {
		return nil, errors.New("Check your inputs, array lengths don't match!")
	}

	r := make([]pair, len(a), len(a))

	for index, a_element := range a {
		r[index] = pair{a_element, b[index]}

	}

	return r, nil
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
		integerValue, err := strconv.Atoi(scanner.Text())

		if err != nil {
			log.Fatal(err)
		}

		if i == 0 {
			left = append(left, integerValue)
		} else {
			right = append(right, integerValue)
		}

		i = (i + 1) % 2
	}

	if err := scanner.Err(); err != nil {
		log.Fatal(err)
	}

	slices.Sort(left)
	slices.Sort(right)

	pairs, err := zip(left, right)
	if err != nil {
		log.Fatal(err)
	}

	totalDistance := 0
	for _, pair := range pairs {
		distance := pair.left - pair.right

		if distance < 0 {
			distance = -distance
		}

		totalDistance += distance
	}

	fmt.Println("Total distance:", totalDistance)

}
