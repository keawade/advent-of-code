import std.stdio;
import std.file;
import std.string;
import std.array;

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
    string[] words = phrase.split(" ");
    bool valid = true;

    // Check each word in the passphrase against every other word (This method is inefficient)
    foreach (string word; words)
    {
      int matches = 0;
      foreach (string toCheck; words)
      {
        if (word == toCheck)
        {
          matches++;
        }
      }
      if (matches > 1)
      {
        valid = false;
      }
    }
    if (valid)
    {
      validPassphrases++;
    }
  }

  writeln(validPassphrases);
}
