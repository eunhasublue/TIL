const slider = function (target, option) {
  // 이미지 로드 여부
  const toBeLoaded = document.querySelectorAll(`${target} img`);
  let loadedImages = 0;
  toBeLoaded.forEach((item) => {
    item.onload = () => {
      loadedImages += 1;
      if (loadedImages === toBeLoaded.length) {
        innerName(target, option);
      } else {
        return;
      }
    };
  });

  // window.onload = (function (target, option) {
  //   return () => {
  //     innerName(target, option);
  //   };
  // })(target, option);

  /* 메인 돔 준비 */
  function innerName(target, option) {
    const slider = document.querySelector(`${target}`);
    const kindSlider = document.createElement("div");
    const kindWrap = document.createElement("div");
    slider.parentNode.insertBefore(kindWrap, slider);
    kindSlider.className = "kind_slider";
    kindWrap.className = "kind_wrap";
    kindSlider.appendChild(slider);
    kindWrap.appendChild(kindSlider);
    const moveButton = document.createElement("div");
    const prevA = document.createElement("a");
    const nextA = document.createElement("a");
    moveButton.className = "arrow";
    prevA.className = "prev";
    nextA.className = "next";
    prevA.textContent = "이전";
    nextA.textContent = "다음";
    prevA.href = "";
    nextA.href = "";
    moveButton.appendChild(prevA);
    moveButton.appendChild(nextA);
    kindWrap.appendChild(moveButton);

    const slideLis = slider.querySelectorAll("li");
    const liWidth = slideLis[0].clientWidth;
    let moveDist = -liWidth;
    let currentNum = 1;
    let speedTime = option.speed;

    // 클론만들기
    const cloneA = slideLis[0].cloneNode(true);
    const cloneC = slideLis[slideLis.length - 1].cloneNode(true);
    console.log(cloneA, cloneC);
    slider.insertBefore(cloneC, slideLis[0]);
    slider.appendChild(cloneA);

    /* 넓이 구하기 */
    const slideCloneLis = slider.querySelectorAll("li");
    const sliderWidth = liWidth * slideCloneLis.length;
    slider.style.width = sliderWidth + "px";
    slider.style.left = `${moveDist}px`;

    moveButton.addEventListener("click", moveSlide);

    function moveSlide(ev) {
      ev.preventDefault();
      if (ev.target.className === "next") {
        move(-1);
        if (currentNum === slideCloneLis.length - 1) {
          setTimeout(() => {
            slider.style.transition = "none";
            moveDist = -liWidth;
            slider.style.left = `${-liWidth}px`;
            currentNum = 1;
            console.log(moveDist, currentNum);
          }, speedTime);
        }
      } else {
        move(1);
        if (currentNum === 0) {
          setTimeout(() => {
            slider.style.transition = "none";
            moveDist = -liWidth * (slideCloneLis.length - 2);
            slider.style.left = `${moveDist}px`;
            currentNum = slideCloneLis.length - 2;
            console.log(moveDist, currentNum);
          }, speedTime);

          // currentNum = slideLis.length - 1;
          // moveDist = -(liWidth * currentNum);
          // slider.style.left = `${moveDist}px`;
        }
      }
      function move(direction) {
        currentNum += -1 * direction;
        moveDist += liWidth * direction;
        slider.style.transition = `all ${speedTime}ms ease`;
        slider.style.left = `${moveDist}px`;
      } // 메인
    }
  } // innerName end
};
