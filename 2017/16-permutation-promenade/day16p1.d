import std.stdio;
import std.file;
import std.string;
import std.array;
import std.algorithm;
import std.conv;

string spin(string programs, string instruction)
{
  // bringToFront(programs, programs[programs.length - 1]);
  return programs;
}

string exchange(string programs, string instruction)
{
  return programs;
}

string partner(string programs, string instruction)
{
  return programs;
}

void main()
{
  string[] instructions = readText("./input.txt").split(",").array();

  string programs = [];

  foreach (i; 0 .. 16)
  {
    programs ~= ('a' + i).to!char;
  }

  // writeln(programs);

  foreach (string instruction; instructions)
  {
    switch (instruction[0])
    {
      case 's':
        programs = spin(programs, instruction);
        break;
      case 'x':
        programs = exchange(programs, instruction);
        break;
      case 'p':
        programs = partner(programs, instruction);
        break;
      default:
        writeln("Error: unknown instruction, ", instruction[0]);
        break;
    }
  }

  writeln(programs);
}
