// splice()
// 1. 배열에서 특정 항목을 제거할 때 사용
// 2. 제거를 하게되는 과정에서 해당 원소가 몇번째인지 명시를 해줘야 함.
// 3. splice(변수, 숫자)
//    - 숫자 : 변수를 시작으로 몇개를 지우겠다.
const numbers = [10, 20, 30, 40, 50];
const index = numbers.indexOf(30);
const spliced = numbers.splice(index, 2); //해당 결과값은 splice로 제거한 결과값
console.log(spliced); //결과값 : [30, 40]
console.log(numbers); //결과값 : [10, 20, 50] --> 기존의 배열을 건드려 버림

// slice()
// 1. 배열을 잘라낼 때, 사용
// 2. splice()와의 차이점
//    - 기존의 배열을 건들지 않음.
//    - 파라미터(매개변수)에 넣게 되는 값도 다름
// 3. slice(strat number, end number)
//    - start number를 시작으로 end number 전까지 자름
const numbers = [10, 20, 30, 40, 50];
const sliced = numbers.slice(0, 2);
console.log(sliced); //결과값 : [10, 20]
console.log(numbers); //결과값 : [10,20,30,40,50]
