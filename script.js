
const changeImage = function() {
    const imageEl = document.querySelector('#coord-image');

    console.log(imageEl);
    console.log(imageEl.src);

    const xInputEl = document.querySelector('#x-changer');
    const yInputEl = document.querySelector('#y-changer');

    const xCoord = xInputEl.value.padStart(2, '0');
    const yCoord = yInputEl.value.padStart(2, '0');

    // Correct string interpolation using backticks
    const imageSrc = `images/out256_${xCoord}_${yCoord}.jpg`;

    imageEl.src = imageSrc;
}

const xInputEl = document.querySelector('#x-changer');
const yInputEl = document.querySelector('#y-changer');

xInputEl.addEventListener('input', changeImage);
yInputEl.addEventListener('input', changeImage);