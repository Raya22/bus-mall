'use strict';

let itemsNamesArray = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
let itemsSrcArray=['/img/bag.jpg', '/img/banana.jpg', '/img/bathroom.jpg', '/img/boots.jpg', '/img/breakfast.jpg', '/img/bubblegum.jpg', '/img/chair.jpg', '/img/cthulhu.jpg', '/img/dog-duck.jpg', '/img/dragon.jpg', '/img/pen.jpg', '/img/pet-sweep.jpg', '/img/scissors.jpg', '/img/shark.jpg', '/img/sweep.png', '/img/tauntaun.jpg', '/img/unicorn.jpg', '/img/usb.gif', '/img/water-can.jpg', '/img/wine-glass.jpg'];

let ImgsContainer = document.getElementById('items');
let rightImg =document.getElementById('right');
let centerImg =document.getElementById('center');
let leftImg =document.getElementById('left');
let Resultbutton=document.getElementById('ViewResults');
let ulElement=document.getElementById('list');

let totalClicks = 0;

Items.pushedItemsArray=[];
Items.previousCurrentItems=[];


let productName=[];



function Items(name, src) {
  this.name = name;
  this.src = src;
  this.clicks = 0;
  this.timesShown=0;
  Items.pushedItemsArray.push(this);
}


function randomNumber() {
  return Math.floor(Math.random() * Items.pushedItemsArray.length);
}



function renderChart(){

  let clicks=[];
  let names=[];
  let timesShown=[];

  for(let i=0; i<Items.pushedItemsArray.length ;i++)
  {
    clicks.push(Items.pushedItemsArray[i].clicks);
    names.push(Items.pushedItemsArray[i].name);
    timesShown.push(Items.pushedItemsArray[i].timesShown);


  }

  let ctx = document.getElementById('myChart').getContext('2d');
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: '# of Votes',
        data: clicks,
        backgroundColor:
          'rgba(255, 99, 132, 0.2)',
     
        borderColor:
          'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: '# of timeShown',
        data: timesShown,
        backgroundColor:
          'rgba(144, 99, 100, 0.2)',
     
        borderColor:
          'rgba(144, 99, 100, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}



function CreatItems() {
  for(let i = 0; i < itemsNamesArray.length; i++) {
    new Items(itemsNamesArray[i], itemsSrcArray[i]);

  }
}


let leftclick =0;
let centerclick =0;
let rightclick =0;
let attempts=25;


function displayItems() {
  while (Items.previousCurrentItems.length < 6) {
    let number = randomNumber();
    if (!Items.previousCurrentItems.includes(number)) {
      Items.previousCurrentItems.push(number);
      console.log(randomNumber);
    }
  }


  // here I choose a random number from the stored random which is in the previousCurrent[] array
  // then I pass this number To PushedItemsArray [] which contain all Items object to choose the src for the same Image
  leftImg.src = Items.pushedItemsArray[Items.previousCurrentItems[0]].src;
  //here I access the TimeShown for the same image to increase it by one
  Items.pushedItemsArray[Items.previousCurrentItems[0]].timesShown++;
  leftclick = Items.pushedItemsArray[Items.previousCurrentItems[0]];

  centerImg.src = Items.pushedItemsArray[Items.previousCurrentItems[1]].src;
  Items.pushedItemsArray[Items.previousCurrentItems[1]].timesShown++;
  centerclick = Items.pushedItemsArray[Items.previousCurrentItems[1]];

  rightImg.src = Items.pushedItemsArray[Items.previousCurrentItems[2]].src;
  Items.pushedItemsArray[Items.previousCurrentItems[2]].timesShown++;
  rightclick = Items.pushedItemsArray[Items.previousCurrentItems[2]];


  Items.previousCurrentItems = Items.previousCurrentItems.slice(3, 6);
}

let clickHandler = function(event) {
  if (event.target === ImgsContainer) {
    return alert('please click on the image');
  }
  totalClicks++;
  let clickedImage = event.target;
  let id = clickedImage.id;
  if (id === 'right'){
    rightclick.clicks++;
  }
  if (id === 'center'){
    centerclick.clicks++;
  }
  if (id === 'left'){
    leftclick.clicks++;
  }


  if(totalClicks === attempts) {
    ImgsContainer.removeEventListener('click', clickHandler);
    renderChart();
    ViewListFunction();
  }
  displayItems();
};

ImgsContainer.addEventListener('click', clickHandler);

function ViewListFunction(event) {
  for(let i=0; i<Items.pushedItemsArray.length;i++)
  {
    let liElement=document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent=Items.pushedItemsArray[i].name+'had a '+Items.pushedItemsArray[i].clicks+' votes , and was seen a '+Items.pushedItemsArray[i].timesShown;

  }
  Resultbutton.removeEventListener('click',ViewListFunction);
}

Resultbutton.addEventListener('click',ViewListFunction);

CreatItems();

displayItems();




