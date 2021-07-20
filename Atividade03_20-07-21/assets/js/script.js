

//> pega só elementos FILHOS da classe (não pega elementos netos, por exemplo)
//fora do arquivo é comum usarmos o id mais de uma vez.
//Precisa adicionar divs em branco no código onde há input do usuário (embaixo).
// | --> o nome disso aqui é pipe. Dois dele fazem o ou.

let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')

email.style.width = '100%'
mensagem.style.width = '100%'

function ruleEmail(email) {
    const re = /\S+@\S+\.\S+/
    return re.test(String(email).toLowerCase())
}
//esse re (o que tem nele) é uma regex

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    let email_valido = ruleEmail(email.value.toLowerCase())

    if (!email_valido) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = ''
        email.style.border = 'solid #31c438'
    }
}

mensagem.addEventListener('keyup', () => {
    let txtMsg = document.querySelector('#txtMsg')

    if (mensagem.value.length < 5) {
        txtMsg.innerHTML = 'Mensagem muito curta!'
        txtMsg.style.color = 'red'

    } else {
        txtMsg.innerHTML = ''
        mensagem.style.border = 'solid #31c438'

    }

})

