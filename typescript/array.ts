// 타입스크립트는 타입에 대해 유추에서 타입을 지정함.
let list = [1, 2, 3];

// 아래 방식을 많이 선호함
let list2: number[] = [1, 2, 3];

// 아래 방식은 jsx에서 충돌날 수가 있어서 지양
let list3: Array<number> = [1, 2, 3];

// 이렇게 해서 숫자나 문자를 같이 들어가게 할 수 있다.
let list4: (number | string)[] = [1, 2, 3, "4"];
