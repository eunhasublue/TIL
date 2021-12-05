const dogName = "멍멍이";
const dogAge = 2;

/*
  객체 선언
  키(이름) : 값
    1. 키에는 공백이 있으면 안된다.
*/
const dog = {
  name: "멍엉이",
  age: 2,
  cute: true,
};

console.log(dog); //dog 객체에 대한 정보를 확인
console.log(dog.name); //dog라는 객체에서 이름을 추출
console.log(dog.age); //dog라는 객체에서 나이를 추출

const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨",
};
console.log(ironMan);

/*
  1. 함수의 파라미터에서도 객체를 받아와서 사용할 수 있다.
  2. 위 파라미터는 객체 형태를 가지고 있을 것이다.
*/
function print(hero) {
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
  console.log(text);
}
print(ironMan);

function print(hero) {
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
  console.log(text);
}

/*
  객체 비구조화 할당
    1. 변수 { 추출하고 싶은 키값 } = 추출하고싶은 객체 이름
    2. 위 처럼 선언하여 키값들을 꺼내쓸 수 있다,
*/
function print(hero) {
  const { alias, name, actor } = hero;
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}
print(ironMan);

/*
  객체 비구조화 할당
    1. 더 간단한 방법은 파라미터에 '{객체에 들어있으며 추출하고 싶은 키값 }' 으로 넣어주면 된다.
*/
function print({ alias, name, actor }) {
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}
print(ironMan);

/*
  객체안에 함수 넣기
    1. 여기서 function keyword의 this는 자기가 속해 있는 dog 함수를 가르킨다.
    2. 여기서 화살표 함수의 this는 자기가 속한 곳을 가르킬 수 없기 때문에
       작동하지 않는다.
*/
const dog = {
  name: "멍멍이",
  sound: "멍멍!",
  say: function say() {
    console.log(this.sound);
  },
};

const cat = {
  name: "고양이",
  sound: "야옹~",
};

cat.say = dog.say;
cat.say(); // dog 객체의 say함수를 그대로 가져왔기 때문에 this가 작동한다.

const catSay = cat.say;
catSay(); //Error! : dog 객체에서 만든 함수를 밖으로 꺼내는 순간 this와의 관계가 깨진다

/*
  Getter와 Setter 함수
    1. 객체안에 Getter와 Setter 함수를 설정할 수 있다.
    2. 위 함수를 사용하게 되면, 특정 값을 바꾸려고 하거나 조회하려 할 때,
       우리가 원하는 코드를 실행할 수 있다.
*/
const numbers = {
  a: 1,
  b: 2,
  get sum() {
    //Getter 함수 설정
    console.log("sum 함수가 실행됩니다.");
    return this.a + this.b;
    //get함수에서는 어떤 값을 반환해줘야한다.
    //여기서 this는 numbers 객체를 가르킨다.
  },
};

/*
    Getter Function
      1. 보통 함수 실행 시, sum() 처럼 호출하는데, 여기선 그런게 없다.
         getter함수는 특정 값을 호출한게 아니고, 조회하려고 할때 
         특정 코드를 실행시키고 연산된 값을 받아서 사용하는 것을 의미한다. 
  */
console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);

/*
    Setter Function
  */
const dog = {
  _name: "멍멍이",
  get name() {
    //dog._name으로 조회하지 않기 위해서 설정할수도 있음
    console.log("_name을 조회합니다...Loading");
    return this._name;
  },
  set name(value) {
    //파라미터로 어떠한 값을 무조건 설정해줘야 한다.
    console.log("이름이 바뀝니다. -> " + value);
    this._name = value;
  },
};
console.log(dog.name);
dog.name = "뭉뭉이";
console.log(dog.name);

//값이 바뀔 때 합을 구하는 함수
const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    //Setter함수에서 이 함수를 호출할 것임
    console.log("calculate");
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    this._a = value;
    this.calculate();
  },
  set b(value) {
    this._b = value;
    this.calculate();
  },
};

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
console.log(numbers.sum);

//조회할때마다 합을 구함 -> 비효율적
const numbers2 = {
  a: 1,
  b: 2,
  get sum() {
    console.log("sum");
    return this._a + this.b;
  },
};
