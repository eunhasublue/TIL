// map : 배열 안에 있는 원소를 변환할 때, 사용
// 모든 원소를 변환하고 싶을 때

const array = [1, 2, 3, 4, 5, 6, 7, 8];

// 아래 코딩은 각 인덱스별로 제곱하여 새로운 배열을 만듬 이것을 map함수로 간단하게 만들수있음
// const squared = [];
// for (let i = 0; i < array.length; i++) {
//   squared.push(array[i] * array[i]);
// }
// array.forEach(n => {
//   squared.push(n * n);
// });
const square = (n) => n * n;
const squared = array.map(square);
const squared_simple = array.map((n) => n * n); //더 간단하게 변환

console.log(squared);

const items = [
  {
    id: 1,
    text: "hello",
  },
  {
    id: 2,
    text: "bye",
  },
];

const texts = items.map((item) => item.text);
console.log(texts);
