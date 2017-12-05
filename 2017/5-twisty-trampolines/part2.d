import std.stdio;
import std.file;
import std.conv;
import std.algorithm;
import std.string;
import std.array;

void main()
{
  // Pull in input and prep for iteration
  string input = readText("./input.txt");
  string[] instructionStrings = input.splitLines();
  int[] instructions = instructionStrings.map!(n => n.parse!int).array();

  int steps = 0;

  int pos = 0;
  int max = to!int(instructions.length);

  while (!(pos >= max || pos < 0))
  {
    int nextPos = pos + instructions[pos];

    if (instructions[pos] >= 3)
    {
      instructions[pos]--;
    }
    else
    {
      instructions[pos]++;
    }

    pos = nextPos;
    steps++;
  }
  writeln(steps);
}
