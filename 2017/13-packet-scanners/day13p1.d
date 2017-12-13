import std.stdio;
import std.file;
import std.string;
import std.array;
import std.algorithm;
import std.conv;

void main()
{
  int[][] input = readText("./input.txt").split("\n").map!(l => l.split(": ")
      .map!(n => to!int(n)).array()).array();

  // Track severity
  int severity = 0;

  // For each picosecond until the end of the firewall
  for (int t = 0; t < input[input.length - 1][0]; t++)
  {
    // Check layers
    foreach (int[] layer; input)
    {
      // If layer exists for that picosecond
      if (layer[0] == t)
      {
        // Check if scanner is currently at position 0
        if ((t % ((layer[1] - 1) * 2)) == 0)
        {
          // Calc severity (Depth * Range) and elevate system severity
          severity += layer[0] * layer[1];
        }
      }
    }
  }

  writeln(severity);
}
