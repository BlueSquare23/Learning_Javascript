// There are two approaches to solving this.

// Approach #1 - Traversing the DOM.
/* We can use our good friend querySelectorAll to grab an array of all
 * question-btn elements. Then we can loop over that array and forEach button
 * we can grab the article element we're looking for by getting the parrent of
 * the parent of the question-btn element. Once we have a var containing our
 * question article element we can toggle on and off the show-text css class on
 * click.
 */
/*
const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn){
  btn.addEventListener('click', function(eventObject){
    // Get the parent of the parent of our current target, question-btn.
    // console.log(eventObject.currentTarget.parentElement.parentElement);
    const question = eventObject.currentTarget.parentElement.parentElement;
    question.classList.toggle('show-text');
  });
});
*/

// Approach #2 - Using selectors inside the element.
/* In the second approach we're selecting our article tags via their ID using
 * querySelectorAll. Then we're looping over them again and forEach question
 * article element we're selecting the button via relative reference to the
 * question object itself. So instead of getting the btn via the document,
 * we're getting it via the question (aka article) element.
 *
 * We've also setup a second loop inside of our event listener that will close
 * the other question text if its plus icon is clicked on.
 */

const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', function(){
    // Close other btns if another plus is clicked.
    questions.forEach(function(item){
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });
    question.classList.toggle('show-text');
  });
});
