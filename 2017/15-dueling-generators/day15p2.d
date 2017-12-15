import std.stdio;
import std.string;
import std.algorithm;
import std.conv;
import std.random;
import std.range;
import std.functional;

// Create alias to a helper map function for use later
// `pipe` pipes functions in sequence. In this case, it pipes the output of the map into the filter
// https://dlang.org/phobos/std_functional.html#pipe
alias transform(int mod_value) = pipe!(map!(x => cast (ushort) x), filter!(x => x % mod_value == 0));

void main()
{
  // Declare constants
  int seed_a = 699;
  int seed_b = 124;
  int steps = 5_000_000;

  // Park–Miller number generators
  // https://en.wikipedia.org/wiki/Lehmer_random_number_generator

  // Create minimal standard generator with multiplier 16807
  // https://dlang.org/phobos/std_random.html#.MinstdRand0
  auto generator_a = MinstdRand0(seed_a);

  // Create minimal standard generator with multiplier 48271
  // Better pseudo-random output according to Park-Miller in response to criticism of the original formula.
  // https://dlang.org/phobos/std_random.html#.MinstdRand
  auto generator_b = MinstdRand(seed_b);

  // `zip` takes two ranges and zips them together as a range of data pairs.
  // https://dlang.org/phobos/std_range.html#zip

  // Passing 4 and 8 to the transform function.
  zip(generator_a.transform!4, generator_b.transform!8)

  // `take` takes only up to n elements of a range (Useful with infinite ranges, such as random number generators produce).
  // https://dlang.org/phobos/std_range.html#take
    .take(steps)

  // `count` takes a function and counts items of the range for which the function returns `true`.
  // https://dlang.org/phobos/std_algorithm_searching.html#count
    .count!(p => p[0] == p[1])

  // Write the output to the console.
    .writeln;
}
