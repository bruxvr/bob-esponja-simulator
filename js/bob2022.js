function escolhaBob1 () {
    escolhaDoJogador = prompt ('Escolha a opção 1 ou 2');

    if (escolhaDoJogador ==1) {
    window.location.href="./bob1wrong.html";
    }
    else if (escolhaDoJogador ==2) {
    window.location.href="./bob2.html"
    }   
    else {
    alert ('Você só pode escolher 1 ou 2.')
    }

}


    function escolhaBob2 () {
    escolhaDoJogador = prompt ('Escolha a opção 1 ou 2');

    if (escolhaDoJogador ==1) {
    window.location.href="./bob3.html";
    }   
    else if (escolhaDoJogador ==2) {
    window.location.href="./bob2wrong.html";
    }   
    else {
    alert ('Você só pode escolher 1 ou 2.')
    }

}

function escolhaBob3 () {
    escolhaDoJogador = prompt ('Escolha a opção 1 ou 2');

    if (escolhaDoJogador ==1) {
    window.location.href="./bobwin.html";
    }   
    else if (escolhaDoJogador ==2) {
    window.location.href="./bob3wrong.html";
    }   
    else {
    alert ('Você só pode escolher 1 ou 2.')
    }

}

