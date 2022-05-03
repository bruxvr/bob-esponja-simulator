function escolhaLula1 () {
    escolhaDoJogador = prompt ('Escolha a opção 1 ou 2');

    if (escolhaDoJogador ==1) {
    window.location.href="./lula2.html";
    }
    else if (escolhaDoJogador ==2) {
    window.location.href="./lula1wrong.html"
    }   
    else {
    alert ('Você só pode escolher 1 ou 2.')
    }

}


    function escolhaLula2 () {
    escolhaDoJogador = prompt ('Escolha a opção 1 ou 2');

    if (escolhaDoJogador ==1) {
    window.location.href="./lula2wrong.html";
    }   
    else if (escolhaDoJogador ==2) {
    window.location.href="./lula3.html";
    }   
    else {
    alert ('Você só pode escolher 1 ou 2.')
    }

}

function escolhaLula3 () {
    escolhaDoJogador = prompt ('Escolha a opção 1 ou 2');

    if (escolhaDoJogador ==1) {
    window.location.href="./lula3wrong.html";
    }   
    else if (escolhaDoJogador ==2) {
    window.location.href="./lulawin.html";
    }   
    else {
    alert ('Você só pode escolher 1 ou 2.')
    }

}

