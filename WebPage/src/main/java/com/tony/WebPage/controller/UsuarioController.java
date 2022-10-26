package com.tony.WebPage.controller;


import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


import com.tony.WebPage.Banco.BancoUsuario;
import com.tony.WebPage.entidade.Cadastro;


@CrossOrigin("*")
@Controller
public class UsuarioController {

    @Autowired
private BancoUsuario acessoBanco;

@GetMapping("/usuarios")
public List<Cadastro> listarUsuarios(){
    return (List<Cadastro>) acessoBanco.findAll();
}

@GetMapping("/usuario/{id}") 
public Optional<Cadastro> getById(@PathVariable int id){
   return acessoBanco.findById(id);
}

@DeleteMapping("/delete/{id}") 
public void deleteById(@PathVariable int id){
   acessoBanco.deleteById(id);
   
}
@PostMapping("/cadastrar")
public void cadastrarUsuario(@RequestBody Cadastro novoUsuario){
   acessoBanco.save(novoUsuario);
}

@PutMapping("/alterar/{id}")
public void alterarUsuario(@RequestBody Cadastro usuario, @PathVariable int id) {
    acessoBanco.findById(id).map( u ->{
         u.setUsuario (usuario.getUsuario());
         u.setEmail (usuario.getEmail());
         u.setSenha (usuario.getSenha());
        return acessoBanco.save(u);     
    });
    
}

@GetMapping("/")
    public String logar(){
        return "login/login";
    }


    @PostMapping("/logar")
    public String validarUsuario(String usuario, String senha ){
        List<Cadastro> listaLogar = (List<Cadastro>) acessoBanco.findAll();
        for( Cadastro user : listaLogar){
            if ( user.getUsuario().equals(usuario) && user.getSenha().equals(senha)){
                    return "lojaST/SiteSTLoja";
            }
        }
        return "login/login";

    }





}
