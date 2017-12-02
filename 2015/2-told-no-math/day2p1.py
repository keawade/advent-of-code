filename = '../source/day2source.txt'

with open(filename) as f:
    source = [line.rstrip('\n') for line in open(filename)]

total = 0

for line in source:
    temp = line.split('x')
    s1 = int(temp[0]) * int(temp[1])
    s2 = int(temp[2]) * int(temp[1])
    s3 = int(temp[0]) * int(temp[2])

    if s1 > s2:
        if s2 > s3:
            smallest = s3
        else:
            smallest = s2
    else:
        if s1 > s3:
            smallest = s3
        else:
            smallest = s1
    total = total + (2*s1 + 2* s2 + 2*s3 + smallest)

print "The elves need to order", total, "square feet of wrapping paper"
