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
