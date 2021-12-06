// 반복문에서 벗어나거나 그 다음 루프를 돌게 할 때
// continue문
for (let i = 0; i < 10; i++) {
  if (i === 2) continue; //특정 조건이 만족됬을때 그 다음 루프를 하라는 것. 그래서 console.log(2) 가 스킵 됨
  console.log(i);
}
//결과값 : 1,3,4,5,6,7,8,9

// break문
for (let i = 0; i < 10; i++) {
  if (i === 2) continue;
  console.log(i);
  if (i === 5) break; //이 반복문을 끝내라
}
//결과값 : 1,3,4,5
