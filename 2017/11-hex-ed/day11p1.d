import std.stdio;
import std.file;
import std.string;
import std.array;
import std.algorithm.comparison;
import std.math;
import std.conv;

void main()
{
  string[] input = readText("./input.txt").split(",").array();

  int x = 0;
  int y = 0;
  int z = 0;

  foreach (string instruction; input)
  {
    switch (instruction)
    {
    case "n": // North
      y++;
      z--;
      break;
    case "s": // South
      y--;
      z++;
      break;
    case "ne": // North East
      x++;
      z--;
      break;
    case "sw": // South East
      x--;
      z++;
      break;
    case "nw": // North West
      x--;
      y++;
      break;
    case "se": // South West
      x++;
      y--;
      break;
    default:
      writeln("Error: Unhandled case, ", instruction);
      break;
    }
  }

  auto steps = (abs(x) + abs(y) + abs(z)) / 2;

  // writeln("Position: ", x, ", ", y, ", ", z);
  writeln(steps);
}
