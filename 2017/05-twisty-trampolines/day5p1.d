import std.stdio;
import std.file;
import std.conv;
import std.algorithm;
import std.string;
import std.array;
import std.math;

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
    input[pos]++;
    pos = nextPos;
    steps++;
  }
  writeln(steps);
}
