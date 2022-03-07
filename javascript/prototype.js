// 객체 생성자
function Animal(type, name, sound) {
  // 여기서 this는 그 객체를 의미 (= new Animal("개", "멍멍이", "멍멍");)
  this.type = type;
  this.name = name;
  this.sound = sound;
  this.say = function () {
    //익명함수
    console.log(this.sound);
  };
}

// 1. new Animal('개', '멍멍이', '멍멍') -> 이 순간에 하나의 객체가 만들어짐
// 2. 객체 생성자를 사용해서 새로운 객체를 만들때는 new 라는 키워드를 사용하고, 객체 생성자이름을 사용하고 함수를 호출해주면 된다.
// 3. 호출되면서 새로운 함수가 만들어지고 있다. => 함수 내용은 똑같은데 계속 호출되기 때문에 비효율적
// 4. say() 함수는 똑같기 때문에 함수 밖으로 꺼내서 재사용
const dog = new Animal("개", "멍멍이", "멍멍");
const cat = new Animal("고양이", "야옹이", "야옹");
dog.say();
cat.say();

// prototype
// 모든 Animal이라는 함수에 공통되=된 함수를 가지게 하자
// 역할 : 객체 생성자로 무언가 만들었을 때, 그걸로 만든 객체들끼리 공휴할 수 있는 어떠한 값이나 함수를 가지고 싶을 때
Animal.prototype.say = function () {
  console.log(this.sound);
};
// 위 아래 같은 의미
function say() {
  console.log(this.sound);
}
dog.say = say;
cat.say = say;
