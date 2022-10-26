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
        fetch("http://localhost:8082/cadastrar",
                    {
                        method: 'POST',
                        headers: {
                            'Accept' : 'application/json',
                            'Content-Type' : 'application/json'
                        },
    
                        body: JSON.stringify({
                            usuario : usuario.value,
                            email : email.value,
                            senha : senha.value
                        }) 
                    })
                .then(function(res) {console.log(res)})
                .catch(function(res){console.log(res)})
    
            
                login()
              
                document.getElementById("usuario").value = ""
                document.getElementById("email").value = ""
                document.getElementById("senha").value = ""
                return alert("Usuário Cadastrado com sucesso!")
                } 
    }
else {
    return alert("Falta @ no seu email!")
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