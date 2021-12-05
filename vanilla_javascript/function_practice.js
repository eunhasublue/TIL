// function 키워드로 함수를 선언
// add는 함수이름
// 파라미터(파라미터1, 파라미터2) : 함수에서 받아오는 값
function add(a, b) {
  return a + b;
}
const sum = add(1, 2); // 함수 선언 및 호출

// ES6부터 문법이 바뀌어, 문자열을 ${} 이것으로 대체해서 출력할 수 있다.
// 함수에서 return이 사용되는 순간 그 함수는 종료된다.
function hello(name) {
  return `Hello, ${name}!`;
}
const result = hello("velopert");
console.log(result);

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score === 89) {
    return "B+";
  } else if (score >= 80) {
    return "B";
  } else if (score === 79) {
    return "c+";
  } else if (score >= 70) {
    return "C";
  } else if (score === 69) {
    return "D+";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
const grade = getGrade(100);
console.log(grade);

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score === 89) {
    return "B+";
  } else if (score >= 80) {
    return "B";
  } else if (score === 79) {
    return "c+";
  } else if (score >= 70) {
    return "C";
  } else if (score === 69) {
    return "D+";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

const grade = getGrade(100);
console.log(grade);

/*
  화살표 함수
    1. 변수 설정
    2. 변수에 대입할 함수 입력
    3. 파라미터(파라미터1, 파라미터2) => {
        return 수식
    } 
    ▲ 위 문법처럼 사용하면 된다.
    4. 화살표 함수와 fcuntion 함수의 차이점
      - 화살표 함수에서 가르키는 this라는 값이 fcuntion 에서 가르키는 this라는 값과 다르다.
*/
const add = (a, b) => {
  return a + b;
};
const add2 = (a, b) => a + b; //훨씬 더 간결하게 사용할 수 있다.

const sum = add(1, 2);
const sum2 = add2(2, 4);

console.log(sum);
console.log(sum2);
