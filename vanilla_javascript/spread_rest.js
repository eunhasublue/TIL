/*
  spread : 펼치다, 퍼트리다
  1. 이 문법을 사용하면, 객체 혹은 배열을 펼칠 수 있다.
  2. 서로 다른 객체를 가리킨다. 
  3. 기존 객체를 복사하고, 복사한 객체에 어떤 추가적인 값을 넣어줄 때.
*/

const slime = {
  name: "슬라임",
};

const cuteSlime = {
  /* 
  기존에 만들었던 객체를 참고해서 새로운 객체를 만들고 싶다면
  spread 연산자(...)를 사용하면 편하다.
  */
  ...slime, //기존에 만들었던 객체를 복사하기 때문에 속성도 따라온다.
  attribute: "cute",
};

const purpleCuteSlime = {
  // name: "슬라임",
  // attribute: "cute",
  ...cuteSlime,
  color: "purple",
};

const greenCuteSlime = {
  // color: "green" -> 위에 있으면 color는 purple이 된다.
  ...purpleCuteSlime,
  /*
  purpleCuteSlime 객체가 먼저 오고, color 값을 덮어씌우게 된다.
  */
  color: "green",
};

//spread 연산자는 배열에서도 사용 가능
const animals = ["개", "고양이", "참새"];

// 기존의 animals 개별은 건들이지 않고, anotherAnimals에 animals를 복사한다.
const anotherAnimals = [...animals, "비둘기"];
// const anotherAnimals = animals.concat('비둘기) -> 위랑 같은 코드
console.log(anotherAnimals);

const numbers = [1, 2, 3, 4, 5];
const spreads = [...numbers, 1000, ...numbers];
console.log(spreads);

/*
rest 연산자(...)
1. spread와 비슷하지만 역할은 다르다.
2. rest는 객체, 배열, 함수의 파라미터에서 사용할 수 있다.
3. spread : 특정 객체나 배열안에, 다른 객체나 배열을 복사 및 퍼트리는 역할
4. rest : 퍼져 있는 것들을 다시 모아오는 역할
*/

// 객체에서의 예시
const purpleCuteSlime = {
  name: "슬라임",
  attribute: "cute",
  color: "보라색",
};

/*
  1. ...rest를 사용하니, color를 제외한 속성이 출력된다.
  2. ...rest라고 안하고 이름도 바꿀 수 있다.
  */
const { color, ...rest } = purpleCuteSlime;
console.log(color);
console.log(rest);
/*
  결과값
  {name: "슬라임", attribute: "cute"}
  name: "슬라임"
  attribute: "cute"
  */

//배열
// 1. ...rest는 앞에 올 수 없다. (ex) [...rest, one] X
// 2. 배열에서의 rest 맨 마지막에 와야 한다.
const numbers = [1, 2, 3, 4, 5, 6];
const [one, ...rest] = numbers;
console.log(one);
console.log(rest);
