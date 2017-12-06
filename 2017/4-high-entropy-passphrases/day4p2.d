import std.stdio;
import std.file;
import std.string;
import std.array;
import std.algorithm;

void main()
{
  // Store number of valid passphrases
  int validPassphrases = 0;

  // Pull in input and prep for iteration
  string input = readText("./input.txt");
  string[] passphrases = input.splitLines();

  // Check each passphrase
  foreach (string phrase; passphrases)
  {
    // 
    string[] words = phrase.split(" ").map!(w => (w.split("").sort().array().join(""))).array();
    
    if (equal(words.sort().uniq(), words.sort())) {
      validPassphrases++;
    }
  }

  writeln(validPassphrases);
}
