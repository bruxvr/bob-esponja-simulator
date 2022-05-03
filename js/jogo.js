// button onclick -> função CliqueResponder
// valores ->
// 1. mensagem que aparece no prompt
// 2. valor da resposta certa -> 1 ou 2
// 3. url que a resposta certa abrirá
// 4. valor da resposta errada
// 5. url que resposta errada abrirá


function cliqueResponder (mensagemDoPrompt, respostaCerta, urlCerta, respostaErrada, urlErrada) {
    let estado = 0
    while (estado == 0){    
    let escolhaDoJogador = prompt(mensagemDoPrompt)
 // estado = valor que eu quero usar para diferenciar respostas possíveis (1 e 2) de todas as outras respostas que não quero
 //estado 1 = (resposta certa/errada, porém valores que eu desejo receber no prompt) 
 //estado 0 = qualquer outra resposta do prompt que não for 1 ou 2
 //estado 0 -> faz loop do prompt até receber 1 ou 2
   
 if( escolhaDoJogador == respostaCerta){
     
     location.href = (urlCerta)
     estado = 1}
    
    else if ( escolhaDoJogador == respostaErrada) {
    location.href = (urlErrada)
        estado = 1}
    
    else {
        alert("Você só pode escolher 1 ou 2!")
        estado = 0
    }
}
}