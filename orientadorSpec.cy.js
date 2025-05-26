describe('Orientador Spec', () => {

  // Hook que impede abertura de novas abas (janela em branco)
  beforeEach(() => {
    Cypress.on('window:before:load', (win) => {
      win.open = () => null; // Impede qualquer window.open
    });
  });

  it.skip('Criar orientador com sucesso', () => {
    cy.visit('https://confianopai.com/login');

    cy.get(':nth-child(2) > .sc-ktwOfi').type('gustavom@'); // ID
    cy.get(':nth-child(3) > .sc-ktwOfi').type('123'); // Senha
    cy.get('.sc-csKJxZ').click(); // botão login

    cy.get('[href="/adm/novo-usuario"]').click(); // botão novo usuário
    let info = login();

    cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'Usuário criado com sucesso!'); // mensagem de sucesso

  });

  it.skip('Criar orientador com sucesso, fazer logout e logar novamente', () => {

    cy.visit('https://confianopai.com/login');
    cy.get(':nth-child(2) > .sc-ktwOfi').type('gustavom@');
    cy.get(':nth-child(3) > .sc-ktwOfi').type('123');
    cy.get('.sc-csKJxZ').click();

    cy.get('[href="/adm/novo-usuario"]').click();
    cy.get('.sc-dsAqUS').select('Orientador');

    let info = login();

    cy.get('.Toastify__toast-body > :nth-child(2)')
      .should('contain', 'Usuário criado com sucesso!');

    cy.get('.Toastify__close-button > svg').click();
    cy.get('.sc-fHejqy > .sc-irLvIq > .sc-csKJxZ').click(); // logout

    cy.get(':nth-child(2) > .sc-ktwOfi').type(info[0]);
    cy.get(':nth-child(3) > .sc-ktwOfi').type(info[2]);
    cy.get('.sc-csKJxZ').click();
  });

  it.skip('Criar orientador sem email', () => {
    
    const { ID, senha } = gerarDados(); 

    cy.visit('https://confianopai.com/login');
    cy.get(':nth-child(2) > .sc-ktwOfi').type('gustavom@');
    cy.get(':nth-child(3) > .sc-ktwOfi').type('123');
    cy.get('.sc-csKJxZ').click();

    cy.get('[href="/adm/novo-usuario"]').click();
    cy.get('.sc-dsAqUS').select('Orientador');

    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(ID); // ID
    // Não preenche o email
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(senha); // senha
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();

    cy.get('.Toastify__toast-body > :nth-child(2)').should('not.exist');
  });

  it.skip('Criar orientador sem senha', () => {
    const { ID, email } = gerarDados(); 

    cy.visit('https://confianopai.com/login');
    cy.get(':nth-child(2) > .sc-ktwOfi').type('gustavom@');
    cy.get(':nth-child(3) > .sc-ktwOfi').type('123');
    cy.get('.sc-csKJxZ').click();

    cy.get('[href="/adm/novo-usuario"]').click();
    cy.get('.sc-dsAqUS').select('Orientador');

    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(ID); // ID
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(email); // email
    // Não preenche a senha
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();

    cy.get('.Toastify__toast-body > :nth-child(2)').should('not.exist');
  });

  it.skip('Criar orientador sem nome', () => {
    const { senha, email } = gerarDados(); 

    cy.visit('https://confianopai.com/login');
    cy.get(':nth-child(2) > .sc-ktwOfi').type('gustavom@');
    cy.get(':nth-child(3) > .sc-ktwOfi').type('123');
    cy.get('.sc-csKJxZ').click();

    cy.get('[href="/adm/novo-usuario"]').click();
    cy.get('.sc-dsAqUS').select('Orientador');

    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(email); // email
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(senha); // senha
    // Não preenche o ID

    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();

    cy.get('.Toastify__toast-body > :nth-child(2)').should('not.exist');
  });
    it('Não permitir cadastrar orientador com email já existente', () => {
    const { ID, email, senha } = gerarDados();

    cy.visit('https://confianopai.com/login');
    cy.get(':nth-child(2) > .sc-ktwOfi').type('gustavom@');
    cy.get(':nth-child(3) > .sc-ktwOfi').type('123');
    cy.get('.sc-csKJxZ').click();

    cy.get('[href="/adm/novo-usuario"]').click();

    // Primeiro cadastro (válido)
    cy.get('.sc-dsAqUS').select('Orientador');
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(ID);
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(email);
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(senha);
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();

    cy.get('.Toastify__toast-body > :nth-child(2)')
      .should('contain', 'Usuário criado com sucesso!');

    cy.get('.Toastify__close-button > svg').click();

    cy.get('[href="/adm/projetos"]').click(); // Voltar para a página de projetos

    // Tentar cadastrar novamente com o MESMO EMAIL
    cy.get('[href="/adm/novo-usuario"]').click();
    cy.get('.sc-dsAqUS').select('Orientador');

    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(ID + '2'); // outro ID
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(email); // mesmo email
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(senha + '2'); // outra senha
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();

    // Validação
    cy.get('.Toastify__toast-body > :nth-child(2)')
      .should('contain', 'Falha ao criar usuário.'); // ajuste conforme a mensagem do sistema
});


});

// Função auxiliar para gerar dados únicos e cadastrar
function login() {
  let hora = new Date().getHours().toString();
  let minuto = new Date().getMinutes().toString();
  let seg = new Date().getSeconds().toString();

  let ID = hora + minuto + seg + "ID";
  let senha = hora + minuto + seg + "Senha";
  let email = hora + minuto + seg + "Email@gmail.com";

  let info = [ID, email, senha];

  cy.get('.sc-dsAqUS').select('Orientador');
  cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(ID);
  cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(email);
  cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(senha);
  cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();

  return info;
}

function gerarDados() {
  const hora = new Date().getHours().toString();
  const minuto = new Date().getMinutes().toString();
  const segundo = new Date().getSeconds().toString();

  const ID = `${hora}${minuto}${segundo}ID`;
  const senha = `${hora}${minuto}${segundo}Senha`;
  const email = `${hora}${minuto}${segundo}@email.com`;

  return { ID, email, senha };
}


