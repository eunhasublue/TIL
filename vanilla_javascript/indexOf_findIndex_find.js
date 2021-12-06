// indexOf()
// 1. 특정 항목이 배열의 몇번째 원소에 있는지 조회할 때
// 2. 객체는 찾을 수 없다.
const heroes = ["아이언맨", "토르", "닥스", "로닌"];
const index = heroes.indexOf("토르");
console.log(index);

// findIndex()
// 1. findIndex()에 들어가는 파라미터(매개변수)는 함수이다,
// 2. 특정 조건을 확인해서 일치한다면 일치하는 원소가 몇번째인지 알려줌
// 3. 배열안에 들어있는 값이 객체이거나, 특정 조건으로 찾는다면
const todos = [
  {
    id: 1,
    text: "자바스크립트 입문",
    done: true,
  },
  {
    id: 2,
    text: "함수 배우기",
    done: true,
  },
  {
    id: 3,
    text: "객체와 배열 배우기",
    done: true,
  },
  {
    id: 4,
    text: "배열 내장함수 배우기",
    done: false,
  },
];

const index_todo = todos.findIndex((todos) => todos.id === 3);
console.log(index_todo);

//find()
// 1. find는 객체나 숫자 등 찾은 값을 반환한다.
const index_todo = todos.find((todos) => todos.id === 3);
//결과값
//{id: 3, text: "객체와 배열 배우기", done: true}
//id: 3
//text: "객체와 배열 배우기"
//done: true
