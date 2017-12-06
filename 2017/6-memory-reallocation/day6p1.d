import std.stdio;
import std.file;
import std.string;
import std.algorithm;
import std.conv;
import std.array;

// [4, 1, 15, 12, 0, 9, 9, 5, 5, 8, 7, 3, 14, 5, 12, 3]
void main()
{
  int[] memoryBank = readText("./input.txt").split("\t").map!(n => n.parse!int).array();

  int cycles = 0;
  string[] patterns = [getPattern(memoryBank)];

  bool patternAlreadyExists = false;

  while (!patternAlreadyExists)
  {
    // Find block to reallocate
    int posToReallocate = findPositionOfLargest(memoryBank);

    // Reallocate block
    int blockValue = memoryBank[posToReallocate];
    memoryBank[posToReallocate] = 0;

    // writeln(blockValue);

    // writeln(memoryBank);
    for (int i = 0; i < blockValue; i++)
    {
      int currPos = to!int((posToReallocate + i + 1) % memoryBank.length);
      memoryBank[currPos] = memoryBank[currPos] + 1;
    }

    string currPattern = getPattern(memoryBank);

    // Check if current pattern already exists
    foreach (string pattern; patterns)
    {
      if (pattern == currPattern)
      {
        patternAlreadyExists = true;
      }
    }

    // Else, save pattern, bump `cycle`, and repeat
    patterns ~= currPattern;
    cycles++;
  }

  writeln(cycles);
}

int findPositionOfLargest(int[] arr)
{
  int largest = 0;
  int largestPos = 0;
  foreach (int i, e; arr)
  {
    if (e > largest)
    {
      largest = e;
      largestPos = i;
    }
  }
  return largestPos;
}

string getPattern(int[] memoryBank)
{
  // This whole function feels really hacky.
  // Using `.dup` to make `result` a mutable array. This solved a problem where `string result` was immutable. Why?
  string result = "".dup;
  foreach (int num; memoryBank)
  {
    if (result.length > 0)
    {
      result ~= ", "; // Why do I need to use `~=` instead of the expected string manip operator `+=`?
    }
    result ~= num.to!string;
  }
  return result;
}
