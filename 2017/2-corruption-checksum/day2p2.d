import std.stdio;
import std.algorithm;
import std.file;
import std.string;
import std.array;
import std.conv;

void main()
{
  string input = readText("./input.txt");
  string[] lines = input.splitLines();
  int[][] rows = lines.map!(l => l.split("\t").map!(a => a.parse!int).array()).array();

  int checksum = 0;

  foreach (int[] row; rows)
  {
    foreach (int a; row)
    {
      foreach (int b; row)
      {
        if (a != b)
        {
          if (a % b == 0)
          {
            checksum += a / b;
            break;
          }
        }
      }
    }
  }

  writeln(checksum);
}
