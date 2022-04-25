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

window.onload = function reloadPage() {

  const selectColor = document.getElementById('black');

  if (selectColor.classList)selectColor.classList.add('selected');
  //else selectColor.className += 'black';
};