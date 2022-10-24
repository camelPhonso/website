function expand(){
    let section = this.parentElement;
    section.parentElement.classList.toggle('hidden');
}

let button = document.querySelectorAll('.show');

for (let i of button){
    i.addEventListener('click', expand);
};