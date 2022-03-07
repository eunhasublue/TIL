// 어떤 타입도 가지지 않는 빈상태
// 값은 없고 타입만 있어서 void라는 값을 쓸수는 없다
// 소문자로 사용하고 일반적으로 어떤 변수에다가 이 void라는 타입을 어노테이션하는게 아니고 값을 반환하지 않은 일종의 undefined를 리턴하는 그런 상태라고 볼수있음
// 이 함수의 return을 가지고 무엇을 하지 않겠다.명시적으로 표현
function returnVoid(message: string): void {
  console.log(message);
  return undefined; //유일하게 void return 값에 할당 가능
}

// void를 가지고 다른 일에 사용할 수 없다.
const r = returnVoid("리턴이 없다. 아무것도 안하겠다.");
