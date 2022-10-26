function expand(){
    let section = this.parentElement;
    section.parentElement.classList.toggle('hidden');
    if (this.innerText === 'Show more...'){
        this.innerText = 'Show less';
    }else{
        this.innerText = 'Show more...';
    }
};

let button = document.querySelectorAll('.show');

for (let i of button){
    i.addEventListener('click', expand);
};

//code for Tarot feature 
const cards = [
    {
        name: 'The Chariot'
    },
    {
        name: 'The Empress'
    },
    {
        name: 'The Fool'
    },
    {
        name: 'The Hermit'
    },
    {
        name: 'The Hierophant'
    },
    {
        name: 'The Lovers'
    },
    {
        name: 'The Magician'
    },
    {
        name: 'The Priestess'
    }
];

//draw() will shuffle the cards array and asign card in each index to an unturned card on the page
function draw(){
    cards.sort((a,b) => 0.5 - Math.random());

    let deck = document.querySelectorAll('.card');

    for (let i = 0; i < deck.length; i++){
        deck[i].innerText = Object.values(cards[i]);
    };
};

draw()