describe('Testes relacionado aos projetos', () => {
  it.skip('Criar um projeto com aluno não cadastrado', () => {
    cy.visit('https://confianopai.com/login')
    cy.get(':nth-child(2) > .sc-ktwOfi').type('gustavom@')
    cy.get(':nth-child(3) > .sc-ktwOfi').type('123')
    cy.get('.sc-csKJxZ').click()
    cy.get('.sc-jdHILj').click()
    cy.get('[href="/adm/add-projeto/cadastro"]').click()
    cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type('alunoinexistente')
    cy.get('.sc-dXNkBG').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text","Erro ao buscar o nome do membro. Verifique o email e tente novamente.")
  })

  it.skip('Criar um projeto só com orientador', () => {
    cy.visit('https://confianopai.com/login')
    cy.get(':nth-child(2) > .sc-ktwOfi').type('gustavom@')
    cy.get(':nth-child(3) > .sc-ktwOfi').type('123')
    cy.get('.sc-csKJxZ').click()
    cy.get('[href="/adm/novo-usuario"]').click()
    let info = cadastroOrientador()
    cy.get('[href="/adm/projetos"]').click()
    cy.get('.sc-jdHILj').click()
    cy.get('[href="/adm/add-projeto/cadastro"]').click()
    cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type(info[1]) 
    cy.get('.sc-fYrVWQ > .sc-hsaIUA').type('Projeto de teste')
    cy.get('.sc-dXNkBG').click()
    cy.get('.sc-eGgGjL > :nth-child(1)').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text","Por favor, adicione pelo menos um integrante.")
    
  })

  it.skip('Criar um projeto com sucesso', () => {
    cy.visit('https://confianopai.com/login')
    cy.get(':nth-child(2) > .sc-ktwOfi').type('gustavom@')
    cy.get(':nth-child(3) > .sc-ktwOfi').type('123')
    cy.get('.sc-csKJxZ').click()
    cy.get('[href="/adm/novo-usuario"]').click()
    let info1 = cadastroOrientador()
    cy.visit('https://confianopai.com/login')
    cy.get('[href="/adm/novo-usuario"]').click()
    let info2 = cadastroAluno()
    cy.get('[href="/adm/projetos"]').click()
    cy.get('.sc-jdHILj').click()
    cy.get('[href="/adm/add-projeto/cadastro"]').click()
    cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type(info2[1])
    cy.get('.sc-fYrVWQ > .sc-hsaIUA').type('Projeto de teste'+info2[0])
    cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type(info1[1]) 
    cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select("Com pendência")
    cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select("Outro")
    cy.get('.sc-eGgGjL > :nth-child(1)').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text","Equipe criada com sucesso!")
  })

  it.skip('criar um projeto que ja existe', () => {
    cy.visit('https://confianopai.com/login')
    cy.get(':nth-child(2) > .sc-ktwOfi').type('gustavom@')
    cy.get(':nth-child(3) > .sc-ktwOfi').type('123')
    cy.get('.sc-csKJxZ').click()
    cy.get('[href="/adm/novo-usuario"]').click()
    let info1 = cadastroOrientador()
    cy.visit('https://confianopai.com/login')
    cy.get('[href="/adm/novo-usuario"]').click()
    let info2 = cadastroAluno()
    cy.get('[href="/adm/projetos"]').click()
    cy.get('.sc-jdHILj').click()
    cy.get('[href="/adm/add-projeto/cadastro"]').click()
    cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type(info2[1])
    cy.get('.sc-fYrVWQ > .sc-hsaIUA').type('Projeto de teste'+info2[0])
    cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type(info1[1]) 
    cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select("Com pendência")
    cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select("Outro")
    cy.get('.sc-eGgGjL > :nth-child(1)').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text","Equipe criada com sucesso!")
    cy.get('.sc-eGgGjL > :nth-child(1)').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should("not.exist")
    
  })

  it.skip('Criar um projeto e deletar', () => {
    cy.visit('https://confianopai.com/login')
    cy.get(':nth-child(2) > .sc-ktwOfi').type('gustavom@')
    cy.get(':nth-child(3) > .sc-ktwOfi').type('123')
    cy.get('.sc-csKJxZ').click()
    cy.get('[href="/adm/novo-usuario"]').click()
    let info1 = cadastroOrientador()
    cy.visit('https://confianopai.com/login')
    cy.get('[href="/adm/novo-usuario"]').click()
    let info2 = cadastroAluno()
    cy.get('[href="/adm/projetos"]').click()
    cy.get('.sc-jdHILj').click()
    cy.get('[href="/adm/add-projeto/cadastro"]').click()
    cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type(info2[1])
    cy.get('.sc-fYrVWQ > .sc-hsaIUA').type('Projeto de teste'+info2[0])
    cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type(info1[1]) 
    cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select("Com pendência")
    cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select("Outro")
    cy.get('.sc-eGgGjL > :nth-child(1)').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text","Equipe criada com sucesso!")
    cy.get('[href="/adm/projetos"]').click()
    cy.get('.sc-ckdEwu').type('Projeto de teste'+info2[0])
    cy.get('.sc-gjLLEI').click()
    cy.get('.sc-iCKXBC > [viewBox="0 0 448 512"] > path').click()
    cy.get('.sc-cZpZpK > :nth-child(1)').click()
    cy.get('.sc-ckdEwu').type('Projeto de teste'+info2[0])
    cy.get('.sc-gjLLEI').should("not.exist")
  })

  it('Criar um projeto, deletar intengrantes e salvar projeto', () => {
    cy.visit('https://confianopai.com/login')
    cy.get(':nth-child(2) > .sc-ktwOfi').type('gustavom@')
    cy.get(':nth-child(3) > .sc-ktwOfi').type('123')
    cy.get('.sc-csKJxZ').click()
    cy.get('[href="/adm/novo-usuario"]').click()
    let info1 = cadastroOrientador()
    cy.visit('https://confianopai.com/login')
    cy.get('[href="/adm/novo-usuario"]').click()
    let info2 = cadastroAluno()
    cy.get('[href="/adm/projetos"]').click()
    cy.get('.sc-jdHILj').click()
    cy.get('[href="/adm/add-projeto/cadastro"]').click()
    cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type(info2[1])
    cy.get('.sc-fYrVWQ > .sc-hsaIUA').type('Projeto de teste'+info2[0])
    cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type(info1[1]) 
    cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select("Com pendência")
    cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select("Outro")
    cy.get('.sc-eGgGjL > :nth-child(1)').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text","Equipe criada com sucesso!")
    cy.get('[href="/adm/projetos"]').click()
    cy.get('.sc-ckdEwu').type('Projeto de teste'+info2[0])
    cy.get('.sc-gjLLEI').click()
    cy.get(':nth-child(2) > .sc-jiaSqj > .sc-hVcFVo > path').click()
    cy.get('.sc-bbxCgr > :nth-child(1)').click()
    cy.get('.iTLMzn > .sc-csKJxZ').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text","Erro ao atualizar o projeto. Por favor, tente novamente.")
  })
})  


function cadastroOrientador() {
let hora = new Date().getHours().toString()
let minuto = new Date().getMinutes().toString()
let seg = new Date().getSeconds().toString()
let ID = hora + minuto + seg + "ID"
let senha = hora + minuto + seg + "Senha"
let email = hora + minuto + seg + "Email@gmail.com"
let info = [ID, email, senha]


cy.get('.sc-dsAqUS').select('Orientador') // botao selecionar
cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(ID)
cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(email)
cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(senha)
cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click() // botao cadastrar

return info
}

function cadastroAluno() {
let hora = new Date().getHours().toString()
let minuto = new Date().getMinutes().toString()
let seg = new Date().getSeconds().toString()
let ID = hora + minuto + seg + "ID" +1
let senha = hora + minuto + seg + 1 + "Senha" 
let email = hora + minuto + seg + 1 + "Email@gmail.com" 
let info = [ID, email, senha]


cy.get('.sc-dsAqUS').select('Aluno') // botao selecionar
cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(ID)
cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(email)
cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(senha)
cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click() // botao cadastrar

return info
}