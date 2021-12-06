const heroes = ["아이언맨", "캡틴아메리카", "토르", "닥터스트레인지"];

for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

// 여기서 hero는 heroes의 각 인덱스들
function print(hero) {
  console.log(hero);
}
heroes.forEach(print);

// 더 간단하게
heroes.forEach(function (hero) {
  console.log(hero);
});

// 더 간단하게
heroes.forEach((hero) => {
  console.log(hero);
});
