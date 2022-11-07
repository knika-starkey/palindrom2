let palindroms = [
  "А роза упала на лапу Азора",
  "Ого",
  "А Собака боса",
  "Привет, мир",
  "А Собака боса",
  "Лёша на полке клопа нашёл",
  "Я — арка края",
];

function checkPalindrom(val) {
  let str = val.toLowerCase();
  str = str.replaceAll(" ", "").replaceAll("—", "").replaceAll(",", "");
  let arrStr = str.split("");
  arrStr.reverse();
  let reverseArrStr = arrStr.join("");
  //console.log(reverseArrStr);
  //   if (reverseArrStr != str) return false;
  //   return true;
  return reverseArrStr == str;
}
console.log(palindroms.filter(checkPalindrom));
