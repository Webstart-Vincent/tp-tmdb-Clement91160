/** @type {NodeListOf<HTMLElement>} */
const bullets = document.querySelectorAll(".bullets > button");

const maxIndex = 2;

let carrouselIndex = 0;
const carrouselImages = document.querySelector(".carrousel-images");

const setUi = () => {
  if (index === 0) previousButton.style.display = "none";
  else previousButton.style.display = "grid";

  if (index === maxIndex) nextButton.style.display = "none";
  else nextButton.style.display = "grid";

  carrouselImages.style.transform = `translateX(-${carrouselIndex * 100}%)`;

  const { backgroundColor } = getComputedStyle(sections[index]);
  body.style.backgroundColor = backgroundColor;

  for (const bullet of bullets) bullet.classList.remove("active");
  bullets[index].classList.add("active");
};
setUi();

function updateImage() {
  carrouselImages.style.transform = `translateX(-${carrouselIndex * 100}%)`;
  for (const bullet of bullets) bullet.classList.remove("active");
  bullets[carrouselIndex].classList.add("active");
}

function previousImage() {
  carrouselIndex = (carrouselIndex - 1 + 3) % 3;
  updateImage();
}

function nextImage() {
  carrouselIndex = (carrouselIndex + 1) % 3;
  updateImage();
}

for (let i = 0; i < bullets.length; i++)
  bullets[i].addEventListener("click", () => {
    carrouselIndex = i;
    updateImage();
  });
