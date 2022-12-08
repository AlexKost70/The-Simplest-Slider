let images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
const sliderImagesBlock = document.getElementById("slider-images");

for (let img of images) {
  sliderImagesBlock.insertAdjacentHTML("beforeend", `<img src="./asset/${img}" class="slider-img img-hidden">`);
}

let sliderImages = document.getElementsByClassName("slider-img");
sliderImages[0].setAttribute("class", "slider-img");

let changeImg = (position) => {
  switch (position) {
    case "prev":
      for (let i = 0; i < sliderImages.length; i++) {
        if (!sliderImages[i].classList.contains("img-hidden")) {
          console.log(i);
          sliderImages[i].classList.toggle("img-hidden");
          if (i == 0) {
            sliderImages[sliderImages.length - 1].classList.toggle("img-hidden");
          } else {
            sliderImages[i - 1].classList.toggle("img-hidden");
          }
          break;
        }
      }
      break;
      
    case "next":
      for (let i = 0; i < sliderImages.length; i++) {
        if (!sliderImages[i].classList.contains("img-hidden")) {
          console.log(i);
          sliderImages[i].classList.toggle("img-hidden");
          if (i == sliderImages.length - 1) {
            sliderImages[0].classList.toggle("img-hidden");
          } else {
            sliderImages[i + 1].classList.toggle("img-hidden");
          }
          break;
        }
      }
      break;
  }
}

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

prevButton.addEventListener("click", () => changeImg("prev"));
nextButton.addEventListener("click", () => changeImg("next"))


