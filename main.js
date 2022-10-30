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

//invite the user to take a tarot reading
let feature = document.getElementById('fun');
feature.style.display = 'none';

function invite(){
    let sections = document.getElementsByClassName('info');
    
    for (let i of sections){
        i.classList.add('hidden');
    };

    feature.style.display = 'flex';
}

setTimeout(invite, 20000);
