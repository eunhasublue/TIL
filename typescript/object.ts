// type이 object가 아닌 아래처럼 이런 타입이라고 나옴
// 이것을 오브젝트 리터럴 타입이라고 한다.
/*
const person = { name: "Mark", age: 39 };
*/
const person = { name: "Mark", age: 39 };

// 전역내장객체
// Object.create() : 오브젝트 형태를 넣게 되어 있다.
// 유니온 타입이여서 | -> 이것을 사용할 수 있다.
const person2 = Object.create({ name: "Mark", age: 39 });
