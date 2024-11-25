const typewriterText = document.querySelector('.typewriter-text');
const phrases = [
  "The aspiring ethical hacker.",
  "A passionate web developer.",
  "A tech enthusiast from Tashkent.",
  "Always ready for a challenge."
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function typeWriter() {
  typewriterText.textContent = currentPhrase.join('');

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      typewriterText.textContent = currentPhrase.join('');
    }

    if (isDeleting && j >= 0) {
      currentPhrase.pop();
      j--;
      typewriterText.textContent = currentPhrase.join('');
    }

    if (j === phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  const typingSpeed = isEnd ? 200 : isDeleting ? 90 : 200;
  setTimeout(typeWriter, typingSpeed);
}

document.addEventListener('DOMContentLoaded', () => typeWriter());
