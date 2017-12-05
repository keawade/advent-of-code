import std.stdio;
import std.math;
import std.conv;

void main()
{
  float input = 325489;
  // float input = 1024;

  float corner = (floor(sqrt(input)));
  if (corner % 2 != 0)
  {
    corner++;
  }

  int x = to!int(floor(corner / 2));
  int y = -x;

  float position = (corner * corner);

  position++;
  x++;

  float limit = pow(x, 2);

  int direction = 0;

  while (position <= limit)
  {
    position++;
    if (direction == 0)
    {
      y++;
    }
    if (direction == 1)
    {
      x--;
    }
    if (direction == 2)
    {
      y--;
    }

    if (position == limit - 1) {
      direction++;
    }
  }

  int distance = abs(x) + abs(y);
  writeln(distance);
}

// void main()
// {
//   float n = 325489;

//   float root = ceil(sqrt(n));
//   float curR;
//   if (root % 2 != 0)
//   {
//     curR = root;
//   }
//   else
//   {
//     curR = root + 1;
//   }
//   float numR = (curR - 1) / 2;
//   float cycle = n - pow(curR - 2, 2);
//   float innerOffset = cycle % (curR - 1);

//   writeln(numR + abs(innerOffset - numR));
// }
