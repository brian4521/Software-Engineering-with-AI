function encrypt() {
  let text = "hello"
  let shift = 3;
  let result = "";

  for (let char of text) {
    if (char >= "a" && char <= "z") {
      let code = char.charCodeAt(0);
      result += String.fromCharCode(((code - 97 + shift) % 26) + 97);
    } else {
      result += char;
    }
  }

  console.log("Plain Text:", text);
  console.log("Cipher Text:", result);
}

encrypt();