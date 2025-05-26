describe('Testes Aluno', () => {
  it.skip('Criação de um Aluno com sucesso', () => {
    let hora = new Date().getHours().toString()
    let minuto = new Date().getMinutes().toString()
    let seg = new Date().getSeconds().toString()
    let id = hora + minuto + seg + "ID"
    let email = hora + minuto + seg + "Email@gmail.com"
    let senha = hora + minuto + seg + "Senha"
    //let info = [id, senha]

    cy.visit('https://confianopai.com/login')
    cy.get(':nth-child(2) > .sc-ktwOfi').type("gustavom@")
    cy.get(':nth-child(3) > .sc-ktwOfi').type("123")
    cy.get('.sc-csKJxZ').click()
    cy.get('[href="/adm/novo-usuario"]').click()
    cy.get('.sc-dsAqUS').select('Aluno')
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(id)
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(email)
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(senha)
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Usuário criado com sucesso!")
  })
  it.skip("Teste de Logar Aluno", () => {
    let infos = criarAluno()
    cy.get('.Toastify__close-button > svg').click()
    cy.get('.sc-fHejqy > .sc-irLvIq > .sc-csKJxZ').click()
    cy.get(':nth-child(2) > .sc-ktwOfi').type(infos[0])
    cy.get(':nth-child(3) > .sc-ktwOfi').type(infos[2])
    cy.get('.sc-csKJxZ').click()
  })
  it.skip("Teste de Criar Aluno sem Usuario", () => {
    let hora = new Date().getHours().toString()
    let minuto = new Date().getMinutes().toString()
    let seg = new Date().getSeconds().toString()
    let id = hora + minuto + seg + "ID"
    let email = hora + minuto + seg + "Email@gmail.com"
    let senha = hora + minuto + seg + "Senha"
    //let info = [id, senha]

    cy.visit('https://confianopai.com/login')
    cy.get(':nth-child(2) > .sc-ktwOfi').type("gustavom@")
    cy.get(':nth-child(3) > .sc-ktwOfi').type("123")
    cy.get('.sc-csKJxZ').click()
    cy.get('[href="/adm/novo-usuario"]').click()
    cy.get('.sc-dsAqUS').select('Aluno')
    //cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(id)
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(email)
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(senha)
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should("not.exist")
  })
  it.skip("Teste de Criar Aluno sem Senha", () => {
    let hora = new Date().getHours().toString()
    let minuto = new Date().getMinutes().toString()
    let seg = new Date().getSeconds().toString()
    let id = hora + minuto + seg + "ID"
    let email = hora + minuto + seg + "Email@gmail.com"
    let senha = hora + minuto + seg + "Senha"
    //let info = [id, senha]

    cy.visit('https://confianopai.com/login')
    cy.get(':nth-child(2) > .sc-ktwOfi').type("gustavom@")
    cy.get(':nth-child(3) > .sc-ktwOfi').type("123")
    cy.get('.sc-csKJxZ').click()
    cy.get('[href="/adm/novo-usuario"]').click()
    cy.get('.sc-dsAqUS').select('Aluno')
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(id)
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(email)
    //cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(senha)
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should("not.exist")
  })
  it.skip("Teste de Criar Aluno sem Email", () => {
    let hora = new Date().getHours().toString()
    let minuto = new Date().getMinutes().toString()
    let seg = new Date().getSeconds().toString()
    let id = hora + minuto + seg + "ID"
    let email = hora + minuto + seg + "Email@gmail.com"
    let senha = hora + minuto + seg + "Senha"
    //let info = [id, senha]

    cy.visit('https://confianopai.com/login')
    cy.get(':nth-child(2) > .sc-ktwOfi').type("gustavom@")
    cy.get(':nth-child(3) > .sc-ktwOfi').type("123")
    cy.get('.sc-csKJxZ').click()
    cy.get('[href="/adm/novo-usuario"]').click()
    cy.get('.sc-dsAqUS').select('Aluno')
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(id)
    //cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(email)
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(senha)
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should("not.exist")
  })
  it("Teste de Criar Aluno sem Passar Nada", () => {
    let hora = new Date().getHours().toString()
    let minuto = new Date().getMinutes().toString()
    let seg = new Date().getSeconds().toString()
    let id = hora + minuto + seg + "ID"
    let email = hora + minuto + seg + "Email@gmail.com"
    let senha = hora + minuto + seg + "Senha"
    //let info = [id, senha]

    cy.visit('https://confianopai.com/login')
    cy.get(':nth-child(2) > .sc-ktwOfi').type("gustavom@")
    cy.get(':nth-child(3) > .sc-ktwOfi').type("123")
    cy.get('.sc-csKJxZ').click()
    cy.get('[href="/adm/novo-usuario"]').click()
    cy.get('.sc-dsAqUS').select('Aluno')
    //cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(id)
    //cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(email)
    //cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(senha)
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should("not.exist")
  })
})

function criarAluno(){
    let hora = new Date().getHours().toString()
    let minuto = new Date().getMinutes().toString()
    let seg = new Date().getSeconds().toString()
    let id = hora + minuto + seg + "ID"
    let email = hora + minuto + seg + "Email@gmail.com"
    let senha = hora + minuto + seg + "Senha"
    let info = [id, email, senha]

    cy.visit('https://confianopai.com/login')
    cy.get(':nth-child(2) > .sc-ktwOfi').type("gustavom@")
    cy.get(':nth-child(3) > .sc-ktwOfi').type("123")
    cy.get('.sc-csKJxZ').click()
    cy.get('[href="/adm/novo-usuario"]').click()
    cy.get('.sc-dsAqUS').select('Aluno')
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(id)
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(email)
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(senha)
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Usuário criado com sucesso!")
    return info
  }