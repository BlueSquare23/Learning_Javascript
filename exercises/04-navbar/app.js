// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
// Useful to see classes on links obj.
//  console.log(links.classList);
//  console.log(links.classList.contains('links'));

/*
  if (links.classList.contains('show-links')){
    links.classList.remove('show-links');
  } else {
    links.classList.add('show-links');
  }
*/

  // Toggle method does the same as above if statement.
  links.classList.toggle('show-links');
});
