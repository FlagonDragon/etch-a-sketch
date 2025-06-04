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

function createGrid() {
    
    do {

        answer = prompt('Please enter a number up to 100','');

    } while (!(answer > 0 && answer <= 100));

    num = answer * answer;

    clearNode(container);

    for (i = 1; i <= num; i++) {
        divi = 'div'+i;
        divName = divi
        divi = document.createElement('div');
        divi.setAttribute('id',`${divName}`);
        divi.setAttribute('class', 'grid');
        divi.style.opacity = '1.0';
        container.appendChild(divi);
    };

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

    createGrid();

    divs = document.querySelectorAll('.grid');

    divs.forEach((div) => {

        basisPercent = `${100/answer}%`;
        
        div.style.flexBasis = `${basisPercent}`;
    
        div.addEventListener('mouseenter', () => {
        
            if (div.id != 'btnDiv' && div.id != 'container') {

                // getComputedStyle is necessary to return current value of opacity
                // storing value of object.style.opacity will give result null
                // the reason is that it only provides current value of opacity that was set in-line

                computedStyle = getComputedStyle(div);

                currentOpacity = Number(computedStyle.opacity);

                newOpacity = `${currentOpacity - 0.1}`;

                console.log(newOpacity);      

                div.style.cssText = `background: ${randomRGB()}; flex-basis: ${basisPercent};`

                div.style.opacity = newOpacity

            }
        });
    });
});

// button functionality above

// 16x16 start below

function createStart() {

    for (i = 1; i <= 256; i++) {
        divi = 'div'+i;
        divName = divi
        divi = document.createElement('div');
        divi.setAttribute('id',`${divName}`);
        divi.setAttribute('class', 'start');
        divi.style.flexBasis = '6.25%';
        container.appendChild(divi);
    }

    myDivs = document.querySelectorAll('.start');

    myDivs.forEach((myDiv) => {

        myDiv.addEventListener('mouseenter', () => {

            myDiv.style.backgroundColor = "deeppink";

        });

    });

};

createStart();

// 16x16 start above

