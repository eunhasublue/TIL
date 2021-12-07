const array = [1, 2, 3, "문자열", {}]; //배열의 선언
console.log(array[0]); //배열의 조회 (0번째부터 시작)

//객체도 넣을 수 있음
const object = [{ name: "멍멍이" }, { name: "야옹이" }];
console.log(object);
console.log(object[0]);

//push()는 기존의 배열에 새로운 항목을 추가해준다.
object.push({ name: "멍뭉이" });

//배열의 크기
console.log(object.length);

//함수를 호출하게 될 때, 원래 넣어야할 파라미터를 넣지 않게 됬을 때, 기본값으로 사용할 값을 지정하는 것을 의미한다.
function calculateCircleArea(r) {
  const radius = r || 1; // r이 주어지지 않을 경우, 그 값은 1로 대체하여 계산
  return Math.PI * radius * radius;
}
const area = calculateCircleArea(4);
console.log(area);

function calculateCircleArea(r = 1) {
  // r이 주어지지 않을 경우, 그 값은 1로 대체하여 계산
  return Math.PI * r * requestIdleCallback;
}
