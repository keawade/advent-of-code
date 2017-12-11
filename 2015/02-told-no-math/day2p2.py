filename = './input.txt'

with open(filename) as f:
    source = [line.rstrip('\n') for line in open(filename)]

total = 0

for line in source:
    temp = line.split('x')
    s1 = int(temp[0])
    s2 = int(temp[1])
    s3 = int(temp[2])

    if s1 > s2:
        if s2 > s3:
            smallest = s3
            nextSmallest = s2
        else:
            smallest = s2
            if s1 > s3:
                nextSmallest = s3
            else:
                nextSmallest = s1
    else:
        if s1 > s3:
            smallest = s3
            nextSmallest = s1
        else:
            smallest = s1
            if s2 > s3:
                nextSmallest = s3
            else:
                nextSmallest = s2

    total = total + smallest*2 + nextSmallest*2 + s1*s2*s3

print "The elves need to order", total, "square feet of wrapping paper"
