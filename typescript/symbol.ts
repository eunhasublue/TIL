// Symbol을 사용할 수 있는 환경이 아님.
console.log(Symbol("foo") === Symbol("foo"));

const sym = Symbol();

const obj = {
  [sym]: "value",
};

// obj["sym"];
obj[sym];
