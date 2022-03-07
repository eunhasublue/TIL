// for문
for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}

const names = ["멍멍", "야옹", "멍뭉"];

//배열 조회하는 방법
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// while문
let i = 0;

// 조건이 까다로운 경우 사용
while (i < 10) {
  //여기서 조건을 false가 되게 해야한다. 아니면 무한루프
  console.log(i);
  i++;
}

let i = 0;
let isFun = false;

while (isFun === false) {
  console.log(i);
  i++;
  if (i === 30) {
    isFun = true;
  }
}
