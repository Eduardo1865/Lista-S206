# Lista-S206
Este projeto utiliza o Cypress para realizar testes automatizados. O Cypress é uma ferramenta que facilita a verificação de casos de teste, garantindo a qualidade e funcionalidade do sistema. Com ele, é possível simular interações do usuário e validar comportamentos esperados de forma eficiente.
# Sobre os projetos

Verifica cenários:

-Criar um projeto com aluno não cadastrado.
-Criar um projeto só com orientador.
-Criar um projeto com sucesso.
-Criar um projeto que ja existe.
-Criar um projeto e deletar.
-Criar um projeto, deletar intengrantes e salvar projeto.

# Relatório de Testes

Para gerar o relatório dos testes automatizados, utilizamos o framework Cypress integrado com o reporter mochawesome.

# Instalação do Reporter

Para instalação do reporter, execute o seguinte comando no terminal:

```bash
npm i cypress-mochawesome-reporter
```

## Execução dos Testes para Gerar o Relatório

Os testes foram executados utilizando o comando abaixo:

```bash
npx cypress run --reporter mochawesome
```