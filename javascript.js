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
        console.log('divName is: '+divi);
        divi = document.createElement('div');
        divi.setAttribute('id',`${divName}`);
        container.appendChild(divi);
    };

};

// functions above

// 16x16 start below

function createStart() {

    for (i = 1; i <= 256; i++) {
        divi = 'div'+i;
        divName = divi
        console.log('divName is: '+divi);
        divi = document.createElement('div');
        divi.setAttribute('id',`${divName}`);
        divi.style.flexBasis = '6.25%';
        container.appendChild(divi);
    }

    myDivs = document.querySelectorAll('div');

    myDivs.forEach((myDiv) => {

        myDiv.addEventListener('mouseenter', () => {
            
            if (myDiv.id != 'btnDiv') {
            myDiv.style.backgroundColor = "hotpink";
            }

        });

    });

};

createStart();

// 16x16 start above

// button functionality below

btn.addEventListener('click', () => {

    createGrid();

    divs = document.querySelectorAll('div');

    divs.forEach((div) => {

        basisPercent = `${100/answer}%`;
        
        div.style.flexBasis = `${basisPercent}`;
    
        div.addEventListener('mouseenter', () => {
        
        if (div.id != 'btnDiv') {
         div.style.cssText = `color: hotpink; background: hotpink; flex-basis: ${basisPercent};`
         }

        });

    });
});