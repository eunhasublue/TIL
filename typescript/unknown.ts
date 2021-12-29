declare const maybe: unknown;

// 언노운은 바로 할당할 수가 없음
const aNumber: number = maybe;

//
if (maybe === true) {
  const aBoolean: boolean = maybe;

  const aString: string = maybe;
}

if (typeof maybe === "string") {
  const aString: string = maybe;
}
