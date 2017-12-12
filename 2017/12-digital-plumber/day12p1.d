import std.stdio;
import std.file;
import std.string;
import std.array;
import std.algorithm;

// import std.math;
import std.conv;

void main()
{
  int[][] input = readText("./input.txt").split("\n")
    .map!(l => l.split(" <-> ")[1]).map!(c => c.split(", ").map!(i => to!int(i)).array()).array();

  void networkSizer(int index, ref int[] network)
  {
    network ~= index;
    foreach (int sub; input[index])
    {
      if (!network.filter!(a => a == sub).array().length > 0)
      {
        networkSizer(sub, network);
      }
    }
  }

  int firstHouse = 0;
  int[] houseNetwork = [];

  networkSizer(firstHouse, houseNetwork);

  writeln(houseNetwork.length);
}
