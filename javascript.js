btnDiv = document.querySelector('#btnDiv');

btn = document.createElement('button');
btn.setAttribute('id', 'btn');
btn.textContent = 'PRESS ME'
btnDiv.appendChild(btn);

container = document.querySelector('#container');

// functions below

function clearNode(parentNode) {
    while (parentNode.firstElementChild) {
        
        parentNode.removeChild(parentNode.firstElementChild)

    }
}

function createGrid(answer) {

    basisPercent = `${100/answer}%`;

    console.log(answer);
    
    num = +answer * +answer

    clearNode(container);

    for (i = 1; i <= num; i++) {
        divi = 'div'+i;
        divName = divi
        divi = document.createElement('div');
        divi.setAttribute('id',`${divName}`);
        divi.setAttribute('class', 'grid');
        divi.style.opacity = '1.0';
        divi.style.flexBasis = `${basisPercent}`;
        container.appendChild(divi);
    };

       divs = document.querySelectorAll('.grid');

    divs.forEach((div) => {

        div.addEventListener('mouseenter', () => {

            // getComputedStyle is necessary to return current value of opacity
            // storing value of object.style.opacity will give result null
            // the reason is that it only provides current value of opacity that was set in-line

            computedStyle = getComputedStyle(div);

            currentOpacity = Number(computedStyle.opacity);

            newOpacity = `${currentOpacity - 0.1}`;

            console.log(newOpacity);      

            div.style.cssText = `background: ${randomRGB()}; flex-basis: ${basisPercent};`

            div.style.opacity = newOpacity

            
        });
    });
};

function randomValue() {

    return Math.floor(Math.random() * 255)

}

function randomRGB() {

    return `rgb(${randomValue()},${randomValue()},${randomValue()})`;

};


// functions above

// button functionality below

btn.addEventListener('click', () => {

    do {

    value = prompt('Please enter a number up to 100');

    } while (!(value > 0 && value <= 100))

    createGrid(value);

});

// button functionality above

createGrid(answer=16);
