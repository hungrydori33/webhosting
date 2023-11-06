document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentSlide = 0;
  let slideInterval; // 자동 슬라이드 간격을 관리할 변수

  function showSlide(slideIndex) {
    if (slideIndex < 0) {
      currentSlide = slides.length - 1;
    } else if (slideIndex >= slides.length) {
      currentSlide = 0;
    }

    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }

  function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
  }

  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 3000); // 3초마다 다음 슬라이드로 이동
  }

  function stopSlideShow() {
    clearInterval(slideInterval); // 자동 슬라이드 중지
  }

  prevBtn.addEventListener('click', () => {
    currentSlide--;
    showSlide(currentSlide);
    stopSlideShow(); // 이전 버튼 클릭 시 자동 슬라이드 중지
  });

  nextBtn.addEventListener('click', () => {
    nextSlide();
    stopSlideShow(); // 다음 버튼 클릭 시 자동 슬라이드 중지
  });

  // 처음에 자동 슬라이드 시작
  startSlideShow();
  showSlide(currentSlide);
});
