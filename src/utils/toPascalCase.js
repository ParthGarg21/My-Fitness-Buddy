const toPascalCase = (str) => {
  str.trim();
  str = str.split(" ");
  console.log(str);
  let newStr = "";
  for (let s of str) {
    if (s[0] !== undefined) {
      newStr += s[0].toUpperCase() + s.substr(1) + " ";
    }
  }
  return newStr;
};

export default toPascalCase;