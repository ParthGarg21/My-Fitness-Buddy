/**
 * Function to convert a strign to pascal type
 */

const toPascalCase = (str) => {
  str.trim();
  str = str.split(" ");
  let newStr = "";
  for (let s of str) {
    if (s[0] !== undefined) {
      newStr += s[0].toUpperCase() + s.substr(1) + " ";
    }
  }
  return newStr.trim();
};

export default toPascalCase;
