const likeNumber = document.getElementById('likeNumber');
const likeContain = document.getElementById('likeContain');
const heart = document.getElementById('like');

let number = 0;
likeContain.addEventListener('click', ()=>{
    heart.style.fill = '#ff0000';
    likeContain.style.border = '2px solid #ff0000';
    number++;
    likeNumber.innerHTML = number;
    console.log('likes:',number);
});