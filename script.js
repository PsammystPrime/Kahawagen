function carouselPreview() {
  const display = document.querySelector(".display");

  //Initialize your images
  const one = document.createElement("img");
  one.src = "./1.jpg";
  const two = document.createElement("img");
  two.src = "./2.jpg";
  const three = document.createElement("img");
  three.src = "./3.jpg";
  const four = document.createElement("img");
  four.src = "./5.jpg";
  const five = document.createElement("img");
  five.src = "./6.jpg";
  const six = document.querySelector(".homeImg");
  //Push them to an array
  const imageArray = [one, two, three, four, five, six];

  index = 0;

  function nextImg() {
    if (index === 5) {
      index = 0;
    } else {
      index++;
    }
    display.innerHTML = "";
    display.appendChild(imageArray[index]);
  }
  setInterval(() => {
    nextImg();
  }, 3000);
}
carouselPreview();
