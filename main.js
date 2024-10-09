'use strict';

/*
JavaScriptにおける数値表現
*/

console.log(100);
console.log(-1);
console.log(1.5);


'use strict';

console.log(10 + 3); // 13
console.log(10 - 3); // 7
console.log(10 * 3); // 30
console.log(10 ** 3); // 1000
console.log(10 / 3); // 3.3333....
console.log(10 % 3); // 1

console.log(10 + 2 * 3); // 16
console.log((10 + 2) * 3); // 36

'use strict';

// 定数を使う場合には、きちんと宣言をすること。
// const price = 150;
const rate = 1.1;
let price = 150;

console.log(price * 120 * rate);
console.log(price * 130 * rate);
console.log(price * 140 * rate);

// 上書き（再代入）する場合は、constで宣言はせず、letにする。
price = 100;
console.log(price * 140 * rate);

// price = price +1;
// 元のpriceに自分自身を再代入することができる。
price += 1;

// 文字列の表現
console.log('ハローワールド');
// Windowsだったら「Alt」キーを押しながら、「￥」キーを押してください。macOSの場合は「Option」キーを押しながら「￥」キーを押してください。
console.log('ハロー\'ワールド');

const firstname = 'Taro';
const lastname = 'Yamada';

console.log('My name is' + firstname + lastname + 'です');
// テンプレートリテラルを使う。 そのかわり、バッくクオートを入れること！
console.log(`My name is ${firstname} ${lastname} です`)