filename = '../source/day1source.txt'

with open(filename) as f:
    source = [line.rstrip('\n') for line in open(filename)]

floor = 0

for line in source:
    for char in line:
        if char == '(':
            floor = floor + 1
        else:
            floor = floor - 1

print "Santa ends up on floor", floor
