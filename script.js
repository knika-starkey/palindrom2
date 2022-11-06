//треба у нижній регістр, видалити усі знаки та пробіли і потім порівнювати символи у циклі i та довжина рядку -i-1
let arr = [
  "А роза упала на лапу Азора",
  "Ого",
  "А Собака боса",
  "Привет, мир",
  "А Собака боса",
  "Лёша на полке клопа нашёл",
  "Я — арка края",
];

function checkPalindrom(array) {
  let pr = [];
  for (let i = 0; i < array.length; i++) {
    pr[i] = array[i].toLowerCase();
    pr[i] = pr[i].replaceAll(" ", "");
    pr[i] = pr[i].replaceAll("—", "");
    pr[i] = pr[i].replaceAll(",", "");
  }
  for (let i = 0; i < pr.length; i++) {
    for (let j = 0; j < pr[i].length; j++) {
      if (pr[i].charCodeAt(j) != pr[i].charCodeAt(pr[i].length - j - 1)) {
        array.splice(i, 1);
        pr.splice(i, 1);
      }
    }
  }
  return array;
}
alert(checkPalindrom(arr));
