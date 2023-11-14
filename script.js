
let oponent = document.querySelector('.oponent');
let random1 = document.querySelector('.randomnum1');
let random2 = document.querySelector('.randomnum2')
let yournum = document.querySelector('.yournum');
let button1 = document.querySelector('.button1')

let yournumx = 0;
let othernumx = 0;

let myPoints = 0;
let oponentPoints = 0;

function geradorDeNum2() {
    othernumx = Math.floor(Math.random() * 10) + 1;

    random2.innerHTML = `A carta do seu oponente é ${othernumx}`;

    oponentPoints += othernumx;

    oponent.innerHTML = oponentPoints;

    if (oponentPoints > 21){
        setTimeout(function() { 
            alert('Parabéns, você ganhou!')

        }, 1000)
        setTimeout(function() { 
            window.location.reload(); 
        }, 2000)
        return;
    }
}

function geradorDeNum() {
    button1.disabled = true;

    yournumx = Math.floor(Math.random() * 10) + 1;
    
    random1.innerHTML = `A sua carta é ${yournumx}`;

    myPoints += yournumx;
    

    yournum.innerHTML = myPoints;
    

    if (myPoints > 21 || oponentPoints == 21){
        setTimeout(function() { 
            alert('Lamento, você perdeu')
        }, 1000)
        setTimeout(function() { 
            window.location.reload(); 
        }, 2000)
        return;
    }

    if (myPoints == 21){
        setTimeout(function() { 
            alert('Parabéns, você ganhou!')
        }, 1000)
        setTimeout(function() { 
            window.location.reload(); 
        }, 2000)
        return;
    }

    setTimeout(geradorDeNum2, 1000)

    setTimeout(function() {
        button1.disabled = false;}, 1500);

}

function pararJogada() {
    geradorDeNum2()

    if (myPoints < oponentPoints) {
        setTimeout(function() { 
            alert('Lamento, você perdeu')
        }, 1500)
        setTimeout(function() { 
            window.location.reload(); 
        }, 2000)
        return;
    }
}