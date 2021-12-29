// a 라는 변수는 "mark"라는 문자열로 인해 타입이 지정되어져서, string 이외의 타입은 선언할 수 없다.
let a = "Mark";
a = "Mark2";

// type annotation
// 1. 변수를 선언하면서 해당 변수의 타입을 미리 지정할 수 있다.
let annotation: string;
annotation = "Mark";

// 아래 함수 파라미터에서도 타입을 지정할 수 있음
function hello(b: number) {}
hello(39);
