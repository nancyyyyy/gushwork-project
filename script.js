(() => {
  const mainImg = document.getElementById("carouselMainImg");
  const thumbsRoot = document.getElementById("carouselThumbs");
  const prevBtn = document.querySelector(".carousel-btn--prev");
  const nextBtn = document.querySelector(".carousel-btn--next");

  if (!mainImg || !thumbsRoot || !prevBtn || !nextBtn) return;

  const thumbEls = Array.from(thumbsRoot.querySelectorAll(".thumb"));
  const images = thumbEls
    .map((el) => el.querySelector("img")?.getAttribute("src"))
    .filter(Boolean);

  if (images.length === 0) return;

  let index = Math.max(0, images.indexOf(mainImg.getAttribute("src")));
  if (index === -1) index = 0;

  const setActive = (nextIndex) => {
    index = (nextIndex + images.length) % images.length;
    mainImg.setAttribute("src", images[index]);

    thumbEls.forEach((el, i) => {
      el.classList.toggle("thumb--active", i === index);
    });
  };

  thumbEls.forEach((el, i) => {
    el.addEventListener("click", () => setActive(i));
  });

  prevBtn.addEventListener("click", () => setActive(index - 1));
  nextBtn.addEventListener("click", () => setActive(index + 1));
})();
