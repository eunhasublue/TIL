// shift()
// 1. 맨앞에 첫번째 원소(인덱스가 0인)를 하나씩 배열에서 깨낸다.
// 2. 기존의 배열을 수정하게 됨
// 3. 비어질때 까지 계속 빠진다.
// 4. 아무것도 없을때는, 결과값이 [] 형태로 나온다.
const numbers = [10, 20, 30, 40, 50];
const value = numbers.shift();
console.log(value); //결과값 : 10
console.log(numbers); //결과값: [20,30,40,50]

// pop()
// 1. 맨 오른쪽에 있는 원소를 하나씩 꺼낸다.
// 2. 기존의 배열을 수정하게 됨
// 3. 비어질때 까지 계속 빠진다.
// 4. 아무것도 없을때는, 결과값이 [] 형태로 나온다.
// 5. push()랑 하나의 짝임
const numbers = [10, 20, 30, 40, 50];
const value = numbers.pop();
console.log(value); // 결과값 : 50
console.log(numbers); // 결과값 : [10, 20, 30, 40]

// unshift()
// 1. 배열의 맨 앞에 값을 추가해준다.
// 2. shift()랑 하나의 짝임
// 3. 기존의 배열을 바꿔버림.
const numbers = [10, 20, 30, 40, 50];
numbers.unshift(5); // 배열의 맨 앞부분에 5를 추가함
console.log(numbers); // 결과값 : [5, 10, 20, 30, 40, 50]

// concat()
// 1. 여러 개의 배열을 하나의 배열로 합쳐줌.
// 2. 기존의 배열을 건드리지 않음.
// 3. 새로운 배열을 만들어 변수에 담는다.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);
console.log(concated); //결과값 : [1,2,3,4,5,6]

// join()
// 1. 배열 안에 있는 값들을 문자열 형태로 합쳐줄 때 사용.
// 2. join()에 파라미터를 넣어줄 수 있는데, separator:string 임
const arr1 = [1, 2, 3, 4, 5];
const arr_join = arr1.join();
console.log(arr_join); //결과값 : 1,2,3,4,5
console.log(arr1.join(" ")); //결과값 : 1 2 3 4 5
console.log(arr1.join(", ")); //결과값 : 1, 2, 3, 4, 5
