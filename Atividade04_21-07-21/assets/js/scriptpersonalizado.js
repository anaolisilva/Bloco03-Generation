
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')
let nome = document.querySelector('#nome')
let emailOk = false
let msgOk = false
let nomeOk = false

function ruleEmail(email) {
    const re = /\S+@\S+\.\S+/
    return re.test(String(email).toLowerCase())
}
//esse re (o que tem nele) é uma regex

//função com nome, acionada pelo HTML
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    let email_valido = ruleEmail(email.value.toLowerCase())

    if (!email_valido) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
        emailOk = false
    } else {
        txtEmail.innerHTML = ''
        emailOk = true
    }
}

//função em expressão lambda, acionada diretamente no doc de js
mensagem.addEventListener('keyup', () => {
    let txtMsg = document.querySelector('#txtMsg')

    if (mensagem.value.length < 5) {
        txtMsg.innerHTML = 'Mensagem muito curta!'
        txtMsg.style.color = 'red'
        msgOk = false

    } else {
        txtMsg.innerHTML = ''
        msgOk = true

    }

})

nome.addEventListener('keyup', () => {
    let txtNome = document.querySelector('#txtNome')

    if(nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = 'red'
        nomeOk = false
    } else {
        txtNome.innerHTML = ''
        nomeOk = true
    }


})

function enviaMensagem () {
    if(emailOk == true && msgOk == true && nomeOk == true) {
        alert ('Mensagem enviada! Obrigada pelo contato.')
    } else {
        alert ('Por favor preencha os campos corretamente antes de enviar')
    }

}
