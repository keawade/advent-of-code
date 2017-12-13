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

  int delay = 0;

  while (true)
  {
    // Track severity
    int severity = 0;

    // For each picosecond until the end of the firewall
    for (int t = 0; t < input[input.length - 1][0] + 1; t++)
    {
      // Check layers
      foreach (int[] layer; input)
      {
        // If layer exists for that picosecond
        if (layer[0] == t)
        {
          // Check if scanner is currently at position 0
          if (((t + delay) % ((layer[1] - 1) * 2)) == 0)
          {
            // Calc severity (Depth * Range) and elevate system severity
            severity += layer[0] * layer[1] + 1;
            break;
          }
        }
      }
    }
    if (severity == 0)
    {
      writeln(delay);
      break;
    }
    delay++;
  }
}

// Following solution built by following code found in the solutions reddit thread
// to learn several D features.
// https://www.reddit.com/r/adventofcode/comments/7jgyrt/2017_day_13_solutions/dr6bu6o/

// void main()
// {
//   // Create associative array representing the firewall
//   int[int] wall;

//   foreach (line; readText("./input.txt").split("\n"))
//   {
//     // Split each line on the colon and assign values to the firewall
//     int[] el = line.strip.split(": ").map!(e => e.to!int).array();
//     wall[el[0]] = el[1];
//   }

//   // Simulate a firewall run with increasing packet delays
//   for (int delay = 0;; delay++)
//   {
//     bool ok = true;
//     // For each position that could have a scanner
//     foreach (scannerIndex; 0 .. wall.byKey.maxElement + 1)
//     {
//       // Check if there is a scanner
//       if (scannerIndex !in wall)
//       {
//         // If not, skip to next position
//         continue;
//       }

//       // If so, get range of that scanner
//       int range = (wall[scannerIndex] - 1);

//       // Calculate scanner's offset from position 0
//       int offset = (scannerIndex + delay) % (2 * range);

//       if (offset > range)
//       {
//         offset = 2 * range - offset;
//       }

//       // Attempt was detected by the current scanner
//       if (offset == 0)
//       {
//         ok = false;
//         break;
//       }
//     }
//     if (ok)
//     {
//       writeln(delay);
//       break;
//     }
//   }
// }
