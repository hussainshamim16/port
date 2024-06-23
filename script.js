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


// // Function to wrap each letter in a span
// function wrapLettersWithSpan(element) {
//   let text = element.textContent;
//   let wrappedText = '';
//   for (let i = 0; i < text.length; i++) {
//       if (text[i].trim() !== '') {
//           wrappedText += `<span>${text[i]}</span>`;
//       } else {
//           wrappedText += text[i]; // for spaces
//       }
//   }
//   element.innerHTML = wrappedText;
// }

// // Select the paragraph element
// let animatedParagraph = document.getElementById('animatedParagraph');

// // Wrap each letter with a span
// wrapLettersWithSpan(animatedParagraph);

// // Add event listeners to each span
// let letters = animatedParagraph.querySelectorAll('span');

// letters.forEach(function(letter) {
//   letter.addEventListener('mouseenter', function() {
//       letter.classList.add('animate-letter');
//   });

//   letter.addEventListener('mouseleave', function() {
//       letter.classList.remove('animate-letter');
//   });
// });

