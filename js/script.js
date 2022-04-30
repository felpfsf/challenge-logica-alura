/* ****************************************************************************************************************
 *          ALURA - PROGRAMA DE FORMAÇÃO ONE BR - TURMA 2
 *                      PRIMEIRO DESAFIO
 * 
 * Construir um app que criptografa textos com as seguintes chaves
 * 
 *          x--------------------------------------------x
 *          |   A letra "a" é convertida para "ai"       |
 *          |   A letra "e" é convertida para "enter"    |
 *          |   A letra "i" é convertida para "imes"     |
 *          |   A letra "o" é convertida para "ober"     |
 *          |   A letra "u" é convertida para "ufat"     |   
 *          x--------------------------------------------x
 * 
 * REQUISITOS:
 *            - Deve funcionar apenas com letras minúsculas.
 *            - Não devem ser utilizados letras com acentos nem caracteres especiais.
 *            - Deve ser possível converter uma palavra para a versão criptografada
 *              e também retornar uma palavra criptografada para a versão original.
 * EXTRAS:
 *            - Um botão que copie o texto criptografado para a área de transferência.
 * 
 *           x------------------------------------------------------x
 *           |  Desenvolvido por Felipe F.                          |
 *           |  LinkedIn - https://www.linkedin.com/in/felipefsf    |
 *           |  Github - https://github.com/felpfsf                 |
 *           |  Codepen - https://codepen.io/felpfsf                | 
 *           x------------------------------------------------------x
 * ****************************************************************************************************************/



// ***** Declarações de Variáveis *****

const checador = /^[a-z\s]+$/; // Expressão que irá checar se a string está de acordo com a regra proposta



// ***** Entrada e Saída *****
let msg_entrada = document.getElementById("txt-cripto");
let msg_saida = document.getElementById("txt-decripto");

// ***** Botões *****
let btn_cripto = document.getElementById("btn-cripto");
let btn_decripto = document.getElementById("btn-decripto");
let btn_copiartxt = document.getElementById("btn-copy");

// Função de criptografar
function criptografar(){

    let check_msg = msg_entrada.value;

    if (checador.test(check_msg) == true){   

        let cripto_temp = check_msg.replaceAll("e", "enter")
                                    .replaceAll("i", "imes")
                                        .replaceAll("a", "ai")
                                            .replaceAll("u", "ufat")
                                                 .replaceAll("o", "ober");


        return msg_saida.value = cripto_temp;

    } else {
        alert("Mensagem fora dos padrões (cripto)");
    }
}

// Função de descriptografar
function descriptografar(){  

    let check_msg = msg_entrada.value;

    if (checador.test(check_msg) == true){
        
        let msg_decripto_temp = check_msg.replaceAll("enter", "e")
                                        .replaceAll("imes", "i")
                                            .replaceAll("ai", "a")
                                                .replaceAll("ufat", "u")
                                                    .replaceAll("ober", "o");

        return msg_saida.value = msg_decripto_temp;

    } else {
        alert("Mensagem fora dos padrões (decripto)");
    }
}

// Função que limpa os campos de confirmar a ação
function limpa_campo_cripto(){
    criptografar();
    msg_entrada.value = "";
}

function limpa_campo_decripto(){
    descriptografar();
    msg_entrada.value = "";
}

// Função que copia a mensagem
function copia_msg() {
    let copyText = msg_saida;

    copyText.select();
    
    navigator.clipboard.writeText(copyText.value);

    alert("Texto copiado " + copyText.value);

}


// ***** Chamada das funções *****

// Criptografar
// btn_cripto.onclick = criptografar;
btn_cripto.onclick = limpa_campo_cripto;

// Descriptografar
// btn_decripto.onclick = descriptografar;
btn_decripto.onclick = limpa_campo_decripto;

// Copiar Mensagem
btn_copiartxt.onclick = copia_msg;

// Fim