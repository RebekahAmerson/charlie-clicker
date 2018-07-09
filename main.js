const button = document.querySelector('.button');
let message = document.querySelector('.speech-bubble');
let clickCount = 0;
let quote = 'Click the button and give me a treat, please.';



button.addEventListener('click', function() {
  clickCount++;
  if (clickCount === 1) {
    quote = 'Another. Daddy, please!';
  }

  if (clickCount === 2) {
    quote = 'More! MORE!';
  }

  if (clickCount === 3) {
    quote = 'Look at my sad eyes!';
  }

  if (clickCount === 4) {
    quote = 'So hungry!';
  }

  if (clickCount >= 5) {
    quote = 'M-OW, M-OW';
  }
  console.log(clickCount);
  console.log(quote);
  message.innerText = quote;
});
