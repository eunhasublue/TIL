// any 타입은 어떤 타입을 해도 상관없다.

function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny("리턴은 아무거나");

any1.toString();


// 이런식으로 선언을 해도 any는 error가 나지 않는다.
let looselyTyped: any = {};
const d = looselyTyped.a.b;
