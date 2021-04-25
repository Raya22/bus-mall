'use strict';

let itemsNamesArray = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
let itemsSrcArray=['/img/bag.jpg', '/img/banana.jpg', '/img/bathroom.jpg', '/img/boots.jpg', '/img/breakfast.jpg', '/img/bubblegum.jpg', '/img/chair.jpg', '/img/cthulhu.jpg', '/img/dog-duck.jpg', '/img/dragon.jpg', '/img/pen.jpg', '/img/pet-sweep.jpg', '/img/scissors.jpg', '/img/shark.jpg', '/img/sweep.png', '/img/tauntaun.jpg', '/img/unicorn.jpg', '/img/usb.gif', '/img/water-can.jpg', '/img/wine-glass.jpg'];

let results = document.getElementById('items');
let rightImg =document.getElementById('right');
let centerImg =document.getElementById('center');
let leftImg =document.getElementById('left');
let button = document.getElementById('ViewResults');

let totalClicks = 0;

Items.pushedItemsArray=[];
Items.previousCurrentItems=[];

function Items(name, src) {
  this.name = name;
  this.src = src;
  this.clicks = 0;
  this.timesShown=0;
  Items.pushedItemsArray.push(this);
}


function randomNumber() {
  let Random= Math.floor(Math.random() * Items.pushedItemsArray.length);
  return Random;
  
}

function CreatItems() {
  for(let i = 0; i < itemsNamesArray.length; i++) {
    let NewItem= new Items(itemsNamesArray[i], itemsSrcArray[i]);

  }
}



function displayItems() {
  while (Items.previousCurrentItems.length < 6) {
    let number = randomNumber();
    if (!Items.previousCurrentItems.includes(number)) {
      Items.previousCurrentItems.push(number);
      console.log(randomNumber);
    }
  }

leftImg.src = Items.pushedItemsArray[Items.previousCurrentItems[0]].src;
  Items.pushedItemsArray[Items.previousCurrentItems[0]].timesShown++;
  leftImg = Items.pushedItemsArray[Items.previousCurrentItems[0]];

  centerImg.src = Items.pushedItemsArray[Items.previousCurrentItems[1]].src;
  Items.pushedItemsArray[Items.previousCurrentItems[1]].timesShown++;
  centerImg = Items.pushedItemsArray[Items.previousCurrentItems[1]];

  rightImg.src = Items.pushedItemsArray[Items.previousCurrentItems[2]].src;
  Items.pushedItemsArray[Items.previousCurrentItems[2]].timesShown++;
  rightImg = Items.pushedItemsArray[Items.previousCurrentItems[2]];

 
  Items.previousCurrentItems = Items.previousCurrentItems.slice(3, 6);
}

function ViewRes() {
  let header1 = document.createElement('h1');
  header1.textContent = 'Stats';
  results.appendChild(header1);

  let buttonRes = document.createElement('a');
  buttonRes.textContent = 'ViewResults';
  buttonRes.href = '#status';
  button.appendChild(buttonRes);

  for (let i = 0; i < Items.pushedItemsArray.length; i++) {
    let header1 = document.createElement('li');
    header1.textContent = Items.pushedItemsArray[i].clicks + ' votes for ' + Items.pushedItemsArray[i].name;
    results.appendChild(header1);
  }
}

