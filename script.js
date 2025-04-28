'use strict'

const btn = document.getElementById('btn');
const input = document.getElementById('text')
const square = document.getElementById('square')


btn.addEventListener('click', function(){
    const color= input.value.trim().toLowerCase();
    square.style.backgroundColor = color;
});




const smallBtn = document.getElementById('e_btn')
smallBtn.style.display = 'none';


const rangeInput = document.getElementById('range')
const circle = document.getElementById('circle')

rangeInput.addEventListener('input', function(){

const circleNewSize = rangeInput.value

circle.style.width = circleNewSize + '%'
circle.style.height = circleNewSize + '%'
})



































