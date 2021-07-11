const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

/*
function decode(expr) {
  let point = "10";
  let dash = "11";
  let stars = "**********";
  let decodeResult = [];

  for (let i of expr) {
    //если пробел
    if (i == " ") {
      decodeResult.push(stars);
      continue;
    }

    //перебираем символы
    for (let letter in MORSE_TABLE) {
      if (MORSE_TABLE[letter] == i) {
        let letterCode = "";
        //нашли нужную букву

        //перебираем посимвольно морзе
        for (let i = 0; i < letter.length; i++) {
          if (letter[i] == "-") {
            letterCode += dash;
          } else if (letter[i] == ".") {
            letterCode += point;
          }
        }

        //добиваем длину до 10
        while (letterCode.length < 10) {
          letterCode = 0 + letterCode;
        }
        decodeResult.push(letterCode);
      }
    }
  }
  console.log(decodeResult);
  let result = decodeResult.join("");
  return result;
}
*/

function decode(expr) {
  let point = "10";
  let dash = "11";
  let stars = "**********";
  let codeArray = [...expr.match(/.{1,10}/g)];

  //console.log(codeArray);

  let decodeLetter = codeArray.map((item) => {
    if (item == stars) {
      return " ";
    }
    let arrayPairs = item.match(/.{1,2}/g);

    //console.log(arrayPairs);

    let decodeResult = arrayPairs.map((item) =>
      item == point ? "." : item == dash ? "-" : ""
    );

    return decodeResult.join("");
  });

  //console.log(decodeLetter);

  let morse = decodeLetter
    .map((item) => (item == " " ? " " : MORSE_TABLE[item]))
    .join("");

  return morse;
}

//console.log(decode("0000001111**********0000000010"));

module.exports = {
  decode,
};
