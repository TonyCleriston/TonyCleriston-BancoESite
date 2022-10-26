package com.tony.WebPage.Banco;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.tony.WebPage.entidade.Cadastro;
@Repository
public interface BancoUsuario  extends CrudRepository< Cadastro, Integer >{
    
}
