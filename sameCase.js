function sameCase(a, b){

  const isLetter = (с) => /^[a-zA-Z]$/.test(с);
  const isLower = (с) => /^[a-z]$/.test(с);
  const isUpper = (с) => /^[A-Z]$/.test(с);

  if (!isLetter(a) || !isLetter(b)) {
    return -1;
  }

  switch (true) {
    case isLower(a) && isLower(b):
    case isUpper(a) && isUpper(b):
      return 1;
    default:
      return 0;
  }
}