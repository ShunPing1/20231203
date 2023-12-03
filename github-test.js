const h1 = document.querySelector('h1');
console.log(h1);

h1.addEventListener('click',() => {
    h1.classList.toggle('h1-active');
});