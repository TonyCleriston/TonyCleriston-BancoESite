let Contatos = []
function salvar() {
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let msg = document.getElementById("msg").value
    salvando (nome,email,msg)
    document.getElementById("nome").value = ""
    document.getElementById("email").value = ""
    document.getElementById("msg").value = ""
}
function salvando (nome,email,msg) {
    
    let novaMensagem = {
        nome: nome,
        email: email,
        msg: msg,
    }
    Contatos.push(novaMensagem)
   
}
