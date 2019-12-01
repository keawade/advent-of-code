function calcFuel(moduleMass, _requiredFuel) {
  _requiredFuel = int(moduleMass / 3) - 2;

  if (_requiredFuel <= 0)
  return 0;
  return _requiredFuel + calcFuel(_requiredFuel);
}

{ totalFuel += calcFuel($1) }
END { print totalFuel }