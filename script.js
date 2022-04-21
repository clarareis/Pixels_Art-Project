/*let elementBox = document.getElementsByClassName('table')[0];
let secondList = document.createElement('li');
elementBox.appendChild(secondList);
//console.log(list);
firstList.classList.add("box1");
secondList.classList.add("box2");*/


/* for (index = 0; index <5; index +=1){
    let elementBox1 = document.getElementById("pixel-board");
    //elementBox1 * 1;
    let firstList = document.createElement('ul');
    elementBox1.appendChild(firstList);
    firstList.classList.add("box1");
    for (index2 = 0; index2 <5; index2 +=1){
    let elementBox2 = document.getElementsByClassName('box1')[0];
    //elementBox2 * 1;
    let secondList = document.createElement('li');
    elementBox2.appendChild(secondList);
    secondList.classList.add("box2");
}
} */
//criando 5 ul dinamicamente dentro da minha div
for (index = 0; index <5; index +=1){
    let elementBox1 = document.getElementById("pixel-board");
    //elementBox1 * 1;
    let firstList = document.createElement('ul');
    elementBox1.appendChild(firstList);
    firstList.classList.add("box1");
}
//criando 5 li dinamicamente dentro de cada ul já criada anteriormente.
// ver se teria como fazer com 1 único for para fazer 5 li dentro de cada ul.
for (index = 0; index <5; index +=1){
let elementBox2 = document.getElementsByClassName('box1')[0];
let firstLine = document.createElement('li');
    elementBox2.appendChild(firstLine);
    firstLine.classList.add("pixel");
}
for (index = 0; index <5; index +=1){
    let elementBox2 = document.getElementsByClassName('box1')[1];
    let secondLine = document.createElement('li');
        elementBox2.appendChild(secondLine);
        secondLine.classList.add("pixel");
    }
for (index = 0; index <5; index +=1){
    let elementBox2 = document.getElementsByClassName('box1')[2];
    let thirdLine = document.createElement('li');
        elementBox2.appendChild(thirdLine);
        thirdLine.classList.add("pixel");
    }
for (index = 0; index <5; index +=1){
    let elementBox2 = document.getElementsByClassName('box1')[3];
    let fourLine = document.createElement('li');
        elementBox2.appendChild(fourLine);
        fourLine.classList.add("pixel");
    }
for (index = 0; index <5; index +=1){
    let elementBox2 = document.getElementsByClassName('box1')[4];
    let fiveLine = document.createElement('li');
        elementBox2.appendChild(fiveLine);
        fiveLine.classList.add("pixel");
    }