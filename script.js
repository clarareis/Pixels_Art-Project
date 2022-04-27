/* eslint-disable no-undef */

// resolvendo requisito 4
// criando 5 ul dinamicamente dentro da minha div
for (index = 0; index < 5; index += 1) {
  const elementBox1 = document.getElementById('pixel-board');
  // elementBox1 * 1;
  const firstList = document.createElement('ul');
  elementBox1.appendChild(firstList);
  firstList.classList.add('box1');
}
// criando 5 li dinamicamente dentro de cada ul já criada anteriormente.
// ver se teria como fazer com 1 único for para fazer 5 li dentro de cada ul.
for (index = 0; index < 5; index += 1) {
  const elementBox2 = document.getElementsByClassName('box1')[0];
  const firstLine = document.createElement('li');
  elementBox2.appendChild(firstLine);
  firstLine.classList.add('pixel');
}
for (index = 0; index < 5; index += 1) {
  const elementBox2 = document.getElementsByClassName('box1')[1];
  const secondLine = document.createElement('li');
  elementBox2.appendChild(secondLine);
  secondLine.classList.add('pixel');
}

for (index = 0; index < 5; index += 1) {
  const elementBox2 = document.getElementsByClassName('box1')[2];
  const thirdLine = document.createElement('li');
  elementBox2.appendChild(thirdLine);
  thirdLine.classList.add('pixel');
}

for (index = 0; index < 5; index += 1) {
  const elementBox2 = document.getElementsByClassName('box1')[3];
  const fourLine = document.createElement('li');
  elementBox2.appendChild(fourLine);
  fourLine.classList.add('pixel');
}
for (index = 0; index < 5; index += 1) {
  const elementBox2 = document.getElementsByClassName('box1')[4];
  const fiveLine = document.createElement('li');
  elementBox2.appendChild(fiveLine);
  fiveLine.classList.add('pixel');
}

// resolvendo requisito 6
function select() {
  const firstColor = document.getElementById('black');
  if (firstColor.classList) {
    firstColor.classList.add('selected');
  }
}

// resolvendo requisito 7
function eventsopen() {
  const buttons = document.getElementsByClassName('color');
  for (let index = 0; index < buttons.length; index += 1) {
    // console.log(button[index]);
    buttons[index].addEventListener('click', function (evt) {
      const selected = document.getElementsByClassName('selected')[0];
      selected.classList.remove('selected');
      evt.target.classList.add('selected');
    });
  }
}

// Resolvendo requisito 8
 const getPixel = document.getElementsByClassName('pixel');

for (let value = 0; value < getPixel.length; value += 1) {
  getPixel[value].addEventListener('click', function (event) {
  let paintPixel = document.getElementsByClassName('selected')[0];
  console.log(paintPixel);
  let getStyle = window.getComputedStyle(paintPixel);
  let paintPixelForBox = getStyle.getPropertyValue('background-color');
  event.target.style.backgroundColor = paintPixelForBox;
  })
 };




// const newTag = document.getclear-board

// Resolvendo requisito 9
const clearBotton = document.getElementById('clear-board');
clearBotton.addEventListener('click', function () {
  const pixels = document.getElementsByClassName('pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

window.onload = () => {
  select();
  eventsopen();
};
