const largestProduct = (numX = '', numY = 1) => {
    // Throw Errors when:
  if (numY < 0) throw new Error("Span must be greater than zero");
  if (numX.match(/\D/))
    throw new Error("Digits input must only contain digits");
  if (numY > numX.length)
    throw new Error("Span must be smaller than string length");

    // Length of string
  const len = numX.length - numY;
  let highestProduct = 0;

  // Iterate through string, multiplying substrings of given spans till highest produt is acheived
  for (let i = 0; i <= len; i++) {
    const currentNumber = [...numX.substring(i, numY + i)].reduce(
      (a, b) => a * b, 1
    );
    if (currentNumber > highestProduct) highestProduct = currentNumber;
  }
  return highestProduct;
};
module.exports = largestProduct;
