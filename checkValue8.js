function isAlphanumeric(str) {
    return str.match(/^[a-zA-Z0-9]+$/) !== null;
  }
  
  console.log(isAlphanumeric("abc123"));  // true
  console.log(isAlphanumeric("abc!@#"));  // false
  console.log(isAlphanumeric("123456"));  // true
  console.log(isAlphanumeric(""));  // false