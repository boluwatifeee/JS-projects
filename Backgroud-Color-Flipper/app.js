const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// For "click me" button
const btn = document.getElementById('btn');

const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    // get random number btw 0 and 3

    const randomNumber = getRandomNumber();
    
    console.log(randomNumber);

    // choose property:background-color
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})


// function to generate index numbers randomly
function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}