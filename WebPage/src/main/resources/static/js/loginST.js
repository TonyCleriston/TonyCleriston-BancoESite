let bancoUsuarios = []

function cadastrarUsuario(usuario, email, senha) {
    
    let novoUsuario = {
        usuario: usuario,
        email: email,
        senha: senha,
    }
    
    if (bancoUsuarios.length == 0) {
        bancoUsuarios.push(novoUsuario)
        document.getElementById("usuario").value = ""
        document.getElementById("email").value = ""
        document.getElementById("senha").value = ""
        login()
        return alert("Usuário cadastrado com sucesso")

    } else {
        for (let i in bancoUsuarios) {
            if ( bancoUsuarios[i].usuario != usuario && bancoUsuarios[i].email != email) {
                bancoUsuarios.push(novoUsuario)
                document.getElementById("usuario").value = ""
                document.getElementById("email").value = ""
                document.getElementById("senha").value = ""
                login()
                return alert("Usuário Cadastrado com sucesso!")
            } else {
                return alert("Nome de e-mail ou usuário já existente!")
            }
        }
    }
}

function cadastrar() {
    let usuario = document.getElementById("usuario").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    if (email.search("@")!= -1){
    if (usuario == "" || email == "" || senha == "") {    
        return alert("Preencha todos os campos!")
    } else {
    cadastrarUsuario(usuario, email, senha) 
    }
}
else {
    return alert("Falta @ no seu email!")
}
}



function logar() {
    if(bancoUsuarios == 0) {
        return alert("Cadastro ainda não realizado")
    }
    if (bancoUsuarios != 0) {
    for (let i in bancoUsuarios) {
        if (document.getElementById("usuario2").value == bancoUsuarios[i].usuario && document.getElementById("senha2").value == bancoUsuarios[i].senha ) {
            return location.href = './Site/SiteSTLoja.html'
        }  
    }
}else {
    return alert("E-mail ou senha incorretos. Tente novamente!")
}
   
    }
function cadastro() {
   document.getElementsByClassName("telalogin")[0].style.display = "none" 
   document.getElementsByClassName("telacadastro")[0].style.display = "flex"   
}
function login() {
    document.getElementsByClassName("telalogin")[0].style.display = "flex" 
    document.getElementsByClassName("telacadastro")[0].style.display = "none"   
 }