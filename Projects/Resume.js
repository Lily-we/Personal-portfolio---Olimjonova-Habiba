// JavaScript to handle the flip effect
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('click', () => {
        const innerCard = card.querySelector('.skill-card-inner');
        innerCard.classList.toggle('flipped');
    });
});
