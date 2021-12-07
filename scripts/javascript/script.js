var cards = document.querySelectorAll('article.card');
var activeCards = document.querySelectorAll('article.card.active');
const navigators = document.querySelectorAll('.navigator.number');

function toggle(A, Z) {
    for (let i = 0; i < activeCards.length; i++) {
        activeCards[i].classList.remove('active');
    }
    for (let i = A; i < Z; i++) {
        cards[i].classList.add('active');
    }
    // cards = document.querySelectorAll('article.card');
    activeCards = document.querySelectorAll('article.card.active');
    console.log(`toggled ${A} to ${Z}`);
}

for (e of navigators) {
    e.addEventListener('click', (eventLog) => {
        const i = Number(eventLog.target.innerText - 1) * 5;
        if(cards[i+4] != undefined){
        toggle(i, i + 5);
        }else{
            console.log(i, cards[i + 4]);
            toggle(i, i + cards.length % 5);
        }
    });
}