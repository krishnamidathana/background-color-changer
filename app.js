const btn = document.querySelector('.btn');
let randomNum= ()=>{
    return Math.floor(Math.random()* 256);
};
 
let changeColor = ()=>{
 
    let color =`rgb( ${randomNum()},  ${randomNum()},  ${randomNum()})`
    document.body.style.backgroundColor = color;
    btn.style.backgroundColor = color;
}
btn.addEventListener('click',changeColor);
window.addEventListener('load',changeColor);
