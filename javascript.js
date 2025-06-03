page = document.querySelector('#page');

btnDiv = document.querySelector('#btnDiv');

btn = document.createElement('button');
btn.setAttribute('id', 'btn');
btn.textContent = 'PRESS ME'
btnDiv.appendChild(btn);

container = document.querySelector('#container');

for (i = 1; i <= 4; i++) {
    divi = 'div'+i;
    divName = divi
    console.log('divName is: '+divi);
    divi = document.createElement('div');
    divi.setAttribute('id',`${divName}`);
    // divi.textContent = 'hi.';
    container.appendChild(divi);
}

function clearNode(parentNode) {
    while (parentNode.firstElementChild) {
        
        parentNode.removeChild(parentNode.firstElementChild)

    }
}

function createGrid() {
    
    do {

        answer = prompt('Please enter a number up to 100','')

    } while (!(answer > 0 && answer <= 100));

    num = answer * answer

    clearNode(container)

    for (i = 1; i <= num; i++) {
        divi = 'div'+i;
        divName = divi
        console.log('divName is: '+divi);
        divi = document.createElement('div');
        divi.setAttribute('id',`${divName}`);
        // divi.textContent = 'hi.';;
        container.appendChild(divi);
    }

}



btn.addEventListener('click', () => {

    createGrid();

    divs = document.querySelectorAll('div');


    divs.forEach((div) => {

        basisPercent = `${100/answer}%`;
        
        div.style.flexBasis = `${basisPercent}`;
    
        div.addEventListener('mouseenter', () => {

         div.style.cssText = `color: hotpink; background: hotpink; flex-basis: ${basisPercent};`

        });

    });
})

