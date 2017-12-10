import std.stdio;
import std.file;
import std.conv;
import std.algorithm;
import std.string;
import std.array;

void main()
{
  // Pull in input and prep for iteration
  int[] input = readText("./input.txt").splitLines().map!(n => n.parse!int).array();

  int steps = 0;

  int pos = 0;
  int max = to!int(input.length);

  while (!(pos >= max || pos < 0))
  {
    int nextPos = pos + input[pos];

    if (input[pos] >= 3)
    {
      input[pos]--;
    }
    else
    {
      input[pos]++;
    }

    pos = nextPos;
    steps++;
  }
  writeln(steps);
}
