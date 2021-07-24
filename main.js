const CARDS = document.querySelectorAll(".cards");

CARDS.forEach(card => {
    card.addEventListener('click', () => {
        removeActive();
        console.log(this);
        card.classList.add("active");
    })
}); 


function removeActive() {
    CARDS.forEach(card => {
        card.classList.remove('active');
    })
}