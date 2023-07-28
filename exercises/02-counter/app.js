let count = 0;

// Select value and buttons.
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// Loop over all the buttons.
btns.forEach(function(btn){
  // Add an event listener to each button.
  btn.addEventListener('click', function(e){
  /* Use the event object e to get the current target class list. In other
   * words, get me the classes for the item I'm clicking on. */
    const styles = e.currentTarget.classList;
    if(styles.contains("decrease")){
      count--;
    }
    else if(styles.contains("increase")){
      count++;
    }
    else{
      count = 0;
    }
    value.textContent = count;
  })
});
