import std.stdio;
import std.file;
import std.string;
import std.algorithm;
import std.conv;
import std.array;

void main()
{
  // Import input data
  string[][] input = readText("./input.txt").split("\n").map!(l => l.split(" -> ")).array();

  // Take root from part 1
  string root = "eqgvf";

  // Create arrays of trunks, weights, and branches
  string[] trunks = input.map!(line => line[0].split(" ")[0]).array();
  int[] weights = input.map!(line => line[0].split(" ")[1].chomp(")").chompPrefix("(").to!int).array();
  string[][] branches = [];
  string[] leaves = [];

  // Populate branches array
  foreach (string[] line; input)
  {
    if (line.length > 1)
    {
      branches ~= line[1].split(", ");
    }
    else
    {
      branches ~= [""];
      leaves ~= line[0].split(" ")[0];
    }
  }

  // Verify arrays match 1:1
  if (trunks.length != branches.length && branches.length != weights.length)
  {
    writeln("Error: array mismatch");
  }

  writeln(weights);

  string test = "Test";

  void traverse()
  {
    writeln(test);
  }

  traverse();
}
