// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'therapy dog groomer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: 'I dont believe in the concept you people call "the moon"',
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'freelance brutalist architectecture critic',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'I have always wanted to be a walrus',
  },
  {
    id: 3,
    name: 'nicholas cage',
    job: 'not the actor',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'I wish for once I could get some silence from the voices',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'bean collector',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'I once did a fart that was so bad it made my mom cry',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function(){
  showPerson(currentItem);
});

// Show person based on item.
function showPerson(){
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// Show next person.
nextBtn.addEventListener('click', function(){
  currentItem++;
  // loop through items by resetting index.
  if(currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson(currentItem);
});

// Show previous person.
prevBtn.addEventListener('click', function(){
  currentItem--;
  // loop through items by resetting index.
  if(currentItem < 0){
    currentItem = 3;
  }
  showPerson(currentItem);
});

// Show random person.
randomBtn.addEventListener('click', function getRandomPerson(){
  let oldValue = currentItem;  
  currentItem = Math.floor(Math.random() * reviews.length);
  if (currentItem === oldValue){
    getRandomPerson();
  }
  showPerson(currentItem);
});




















