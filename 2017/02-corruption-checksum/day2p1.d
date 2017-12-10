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
    auto sortedRow = row.sort();
    checksum += (sortedRow[sortedRow.length - 1] - sortedRow[0]);
  }

  writeln(checksum);
}
