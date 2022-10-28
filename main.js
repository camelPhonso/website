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