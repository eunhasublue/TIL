/*
1. Promise는 함수이며, resolve와 resject를 파라미터로 받아와야 한다.
2. Promise는 성공할수도 실패할수도 있다.
3. 성공할 경우, resolve를 호출하면 되고, 실패하면 reject를 호출하면 된다.
*/
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("result"); 성공
    reject(new Error());
  }, 1000);
});

/*
  Promise가 끝나고 어떠한 작업을 하고 싶다.
  1. then을 사용해서 Promise가 끝나고, 할 작업을 설정해줄 수 있다.
  */

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    //에러를 잡아낼때 사용.
    console.error(e);
  });

/*
Promise를 만드는 함수를 작성
*/
function increasedAndPrint(n) {
  //새로운 Promise를 만들어서 반환
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = "ValueIsFiveError";
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

increasedAndPrint(0)
  .then(increasedAndPrint)
  .then(increasedAndPrint)
  .then(increasedAndPrint)
  .then(increasedAndPrint)
  .then(increasedAndPrint)
  .catch((e) => {
    console.log(e);
  });
