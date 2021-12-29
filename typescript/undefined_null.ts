// 타입스크립트에서 undefined & null 은 실제로 각각 undefined & null 이라는 의미를 가짐
// 둘다 소문자만 존재함
// 설정을 하지 않는다면, null에는 null만 undefined에는 undefined만 들어갈 수 있다.

let u: undefined = undefined;

// void에는 undefined만 넣을 수 있다.
let v: void = undefined;

let union: string | null = null;
union = "Mark";
