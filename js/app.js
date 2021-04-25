'use strict';

let itemsNamesArray = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
let itemsSrcArray=['/img/bag.jpg', '/img/banana.jpg', '/img/bathroom.jpg', '/img/boots.jpg', '/img/breakfast.jpg', '/img/bubblegum.jpg', '/img/chair.jpg', '/img/cthulhu.jpg', '/img/dog-duck.jpg', '/img/dragon.jpg', '/img/pen.jpg', '/img/pet-sweep.jpg', '/img/scissors.jpg', '/img/shark.jpg', '/img/sweep.png', '/img/tauntaun.jpg', '/img/unicorn.jpg', '/img/usb.gif', '/img/water-can.jpg', '/img/wine-glass.jpg'];

let itemsContainer = document.getElementById('items');
let rightImg =document.getElementById('right');
let centerImg =document.getElementById('center');
let leftImg =document.getElementById('left');
let button = document.getElementById('ViewResults');

let totalClicks = 0;

Items.pushedItemsArray=[];

function Items(name, src) {
  this.name = name;
  this.src = src;
  this.clicks = 0;
  Items.pushedItemsArray.push(this);
}

function randomNumber() {
  let Random= Math.floor(Math.random() * Items.pushedItemsArray.length);
  return Random;
  console.log(Random);
}

function CreatItems() {
  for(let i = 0; i < itemsNamesArray.length; i++) {
     let NewItem= new Items(itemsNamesArray[i], itemsSrcArray[i]);
  }
}

let leftItem= null;
let centerItem = null;
let rightItem = null;
