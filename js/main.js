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

// Expressão Regular
const regexPass = /^[a-z\s]+$/ // Expressão que irá checar se a string está de acordo com a regra proposta

let inputMessage = document.getElementById('input-text')
let outputMessage = document.getElementById('output-text')

let buttonEncrypt = document.getElementById('btnEncrypt')
let buttonDecrypt = document.getElementById('btnDecrypt')
let buttonCopy = document.getElementById('btnCopy')

let decryptField = document.getElementById('hideOutput')
let noMessageCard = document.getElementById('contentNoMessage')


// Encrypt and Decrypt Functions

function encrypt() {
  let messageToBeTested = inputMessage.value
  if (regexPass.test(messageToBeTested) == true) {
    let encryptedMessage = messageToBeTested
      .replaceAll('e', 'enter')
      .replaceAll('i', 'imes')
      .replaceAll('a', 'ai')
      .replaceAll('u', 'ufat')
      .replaceAll('o', 'ober')

    // console.log(encryptedMessage)
    outputMessage = encryptedMessage
    document.getElementById('output-text').innerHTML = outputMessage
  } else {
    alert(
      'Mensagem fora dos padrões, por favor utilize somente letras minúsculas sem acentos ou números'
    )
  }
}

function decrypt() {
  let messageToBeTested = inputMessage.value
  if (regexPass.test(messageToBeTested) == true) {
    let decryptedMessage = messageToBeTested
      .replaceAll('enter', 'e')
      .replaceAll('imes', 'i')
      .replaceAll('ai', 'a')
      .replaceAll('ufat', 'u')
      .replaceAll('ober', 'o')

    // console.log(decryptedMessage)
    outputMessage = decryptedMessage
    document.getElementById('output-text').innerHTML = outputMessage
  } else {
    alert(
      'Mensagem fora dos padrões, por favor utilize somente letras minúsculas sem acentos ou números'
    )
  }
}

// Copy message function

function copyMessage() {
  let messageToBeCopied = outputMessage
  // console.log(messageToBeCopied)
  navigator.clipboard.writeText(messageToBeCopied)
}

// Clear input and reveal output field after encrypt or decrypt

function clearInputEncrypt() {
  noMessageCard.classList.add('display-option')
  decryptField.classList.remove('display-option')
  encrypt()
  inputMessage.value = ''
}

function clearInputDecrypt() {
  noMessageCard.classList.add('display-option')
  decryptField.classList.remove('display-option')
  decrypt()
  inputMessage.value = ''
}

//  Calls

buttonEncrypt.addEventListener('click', clearInputEncrypt)

buttonDecrypt.addEventListener('click', clearInputDecrypt)

buttonCopy.addEventListener('click', copyMessage)
