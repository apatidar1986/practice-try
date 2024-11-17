function test(str, ...rest) {
  const [name, ...other] = rest;
  console.log(str, "--", ...rest, name, other);
}

console.log(test("ashok", "patidar", "USA"));
