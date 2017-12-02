filename = './input.txt'

with open(filename) as f:
    source = [line.rstrip('\n') for line in open(filename)]

floor = 0
count = 0

for line in source:
    for char in line:
        if char == '(':
            floor = floor + 1
        else:
            floor = floor - 1
        count = count + 1
        if floor == -1:
            print "Santa enters the basement on instruction", count
            break
