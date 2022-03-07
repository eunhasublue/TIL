// filter()
// 1. 특정 조건을 만족하는 원소를 찾아서, 그 원소를 새로운 배열을 만듬
// 2. 기존의 배열을 건들지 않고, 새로운 배열을 만듬
// 3. filter(함수와 조건을 써주어야 함)
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

const tasksNotDone = todos.filter((todo) => todo.done === false);
console.log(tasksNotDone);
