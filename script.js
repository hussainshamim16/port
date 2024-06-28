console.log("red")



  AOS.init(
    {
        offset: 200,
        delay: 99,
        duration: 800,
    }
  );

  // Select the custom cursor element
const cursor = document.getElementById('custom-cursor');

// Listen for mouse movement on the document
document.addEventListener('mousemove', (event) => {
    // Get the mouse position
    const mouseX = event.clientX;          
    const mouseY = event.clientY;

    // Set the position of the custom cursor element
    cursor.style.transform = `translate(${mouseX - cursor.offsetWidth / 2}px , ${mouseY - cursor.offsetHeight / 2}px`;
});

// Add a click effect
document.addEventListener('click', () => {
    // Add a scaling animation on click
    cursor.style.transform += ' scale(1.5)';
    cursor.style.transition = 'transform 0.1s ease';

    // Reset the scale after the animation
    setTimeout(() => {
        cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', '');
    }, 100);
    
});


// Function to wrap each letter in a span
function wrapLettersWithSpan(element) {
  let text = element.textContent;
  let wrappedText = '';
  for (let i = 0; i < text.length; i++) {
      if (text[i].trim() !== '') {
          wrappedText += `<span>${text[i]}</span>`;
      } else {
          wrappedText += text[i]; // for spaces
      }
  }
  element.innerHTML = wrappedText;
}

// Select the paragraph element
let animatedParagraph = document.getElementsByClassName('animated-paragraph')[0];

// Wrap each letter with a span
wrapLettersWithSpan(animatedParagraph);

// Add event listeners to each span
let letters = animatedParagraph.querySelectorAll('span');

letters.forEach(function(letter) {
  letter.addEventListener('mouseenter', function() {
      letter.classList.add('animate-letter');
  });

  letter.addEventListener('mouseleave', function() {
      letter.classList.remove('animate-letter');
  });
});

// Function to check if the element is a text element
function isTextElement(element) {
  // Check if the element is one of the following tags
  return element.tagName === 'P' || 
         element.tagName === 'H1' || 
         element.tagName === 'H2' || 
         element.tagName === 'H3' || 
         element.tagName === 'H4' || 
         element.tagName === 'H5' || 
         element.tagName === 'H6' || 
         element.tagName === 'SPAN' || 
         element.tagName === 'A' || 
         element.tagName === 'DIV'; // Include DIV if it's mainly for text
}

// Add a mousemove event listener to the whole document
document.addEventListener('mousemove', function(event) {
  // Get the element under the cursor
  let targetElement = event.target;

  // Check if the element is a text element
  if (isTextElement(targetElement)) {
      // Add the highlight class to the text element
      targetElement.classList.add('highlight');
  }

  // Remove the highlight class from any other elements not under the cursor
  document.querySelectorAll('.highlight').forEach(function(element) {
      if (element !== targetElement) {
          element.classList.remove('highlight');
      }
  });
});


