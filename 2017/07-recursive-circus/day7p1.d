import std.stdio;
import std.file;
import std.string;
import std.algorithm;
import std.conv;
import std.array;

void main()
{
  string[][] input = readText("./input.txt").split("\n").map!(l => l.split(" -> ")).array();

  string[] roots = input.map!(line => line[0].split(" ")[0]).array();
  string[] branches = [];

  foreach (string[] line; input)
  {
    if (line.length > 1)
    {
      foreach (string branch; line[1].split(", "))
      {
        branches ~= branch;
      }
    }
  }

  string[] bottom = [];

  foreach (string root; roots)
  {
    int match = 0;
    foreach (string branch; branches)
    {
      if (root == branch)
      {
        match++;
      }
    }
    if (match == 0)
    {
      bottom ~= root;
    }
  }

  if (bottom.length > 1)
  {
    writeln("Error: Too many results.");
  }
  else
  {
    writeln(bottom[0]);
  }
}
