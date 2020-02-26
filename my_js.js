const popmotion = require("popmotion");
const arrayOfButtons = document.querySelectorAll('.menu-buttons')

for (let i=0;i<arrayOfButtons.length;i++) {

    arrayOfButtons[i].addEventListener('mouseover', function () {
        arrayOfButtons[i].style.color = `white`;
        arrayOfButtons[i].style.backgroundColor = `#015264`;
    })    
    arrayOfButtons[i].addEventListener('mouseout', function () {
        arrayOfButtons[i].style.color = '#5baec0';
        arrayOfButtons[i].style.backgroundColor = '#3e3e3e';
    }) 
}
const input = document.querySelector('.input-to-copy');
const paragraph = document.querySelector('.comment-paragraph');

input.addEventListener('keyup', function () {
    paragraph.innerText = input.value;
})

/*document.querySelector('.menu').addEventListener('click', function(event) {
    alert(`You clicked on button ${event.target.innerText}`);
});*/

const DOG_URL = "https://dog.ceo/api/breeds/image/random";


const doggos = document.querySelector(".doggos");

function addNewDoggo() {
  const img = document.createElement("img");
  img.src = "https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif";
  img.alt = "Loading Gif";
  doggos.appendChild(img);
  const promise = fetch(DOG_URL);
  promise
  .then(function(response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function(processedResponse) {
    img.src = processedResponse.message;
    img.alt = "Cute Dogs";
  });
}
document.querySelector(".add-new-doggo").addEventListener('click', addNewDoggo);

let c=0;
document.querySelector(".menu").addEventListener('click', function(event) {
  if (c===1) {
    document.querySelector(".menu").removeChild(submenu);
  };
  const submenu = document.createElement("div");
  submenu.innerText = event.target.innerText;
  submenu.style.cssText = 'padding-top:20px;padding-left:20px;color:#5baec0;background-color:#3e3e3e;width:100%;height:50px;margin:1px;font-size: 20px;font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif';
  document.querySelector(".menu1").appendChild(submenu);
  c=1;
})

import { styler, value, listen, pointer, spring } from "popmotion";

const ball = document.querySelector('.box');
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(ballXY.get()).start(ballXY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200,
      // mass: 1,
      // damping: 10
    }).start(ballXY);
  });