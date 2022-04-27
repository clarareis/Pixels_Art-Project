/* eslint-disable no-undef */
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

/* const selected = document.getElementsByClassName('selected');
selected.onclick = function click(classe, velha, nova) {
  classe.classList.remove(velha);
  classe.classList.add(nova);
};
click(selectColor, selected); */

function select() {
  const firstColor = document.getElementById('black');
  if (firstColor.classList) {
    firstColor.classList.add('selected');
  }
}

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

/* const colorBlack = document.getElementById('black');

paint.addEventListener('click', function(e){
  const paint = document.getElementsByClassName('selected')[0];
  e.target.
})
console.log(paint); */

// const newTag = document.getclear-board

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
