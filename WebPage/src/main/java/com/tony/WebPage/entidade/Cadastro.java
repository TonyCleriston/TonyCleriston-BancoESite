package com.tony.WebPage.entidade;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Cadastro {
    
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
      private String usuario;
        private String email;
          private String senha;

    /**
     * 
     */
    public int getId() {
        return id;
    }

    /**
     *
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     *
     */
    public String getUsuario() {
        return usuario;
    }

    /**
     * 
     */
    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    /**
     * 
     */
    public String getEmail() {
        return email;
    }

    /**
     * 
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     */
    public String getSenha() {
        return senha;
    }

    /**
     * 
     */
    public void setSenha(String senha) {
        this.senha = senha;
    }

}
