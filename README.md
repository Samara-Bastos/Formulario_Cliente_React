# Formulário Cliente

## Sobre
Este projeto frontend foi desenvolvido para consumir uma API construída com Spring Boot, para a criação, visualização, atualização e exclusão de registros de clientes. Ele é construído utilizando React e Chakra UI para a interface do usuário.


## Executar
Para iniciar o projeto, siga estas instruções:

Acesse o repositório da api, baixe o projeto e rode o mesmo seguindo suas instruções :

- https://github.com/Samara-Bastos/Api_Cliente_Java

Instalação das dependências:

- npm install

Inicialização do projeto:

- npm start

##  Dependências
- React
- React Router DOM
- Chakra UI
- Axios
- React Toastify

## Rotas:
O projeto utiliza React Router para navegação entre diferentes páginas:

- / (Raiz): Exibe o formulário de cadastro de um novo cliente.
- /view: Exibe a lista de clientes registrados com opções para editar e deletar.
- /id: Exibe o formulário de atualização para o cliente especificado pelo ID.

## Integração com a API
Este frontend interage com a API Cliente através dos seguintes endpoints:

Endpoint POST: /cliente/create
- Descrição: Permite a criação de um novo cliente no banco de dados.

Endpoint GET: /cliente
- Descrição: Permite a visualização de todos os clientes registrados.

Endpoint GET: /cliente/id
- Descrição: Permite a visualização do cliente responsável pelo identificador mencionado.

Endpoint PUT: /cliente/update/
- Descrição: Permite a atualização das informações do cliente.

Endpoint DELETE: /cliente/delete/
- Descrição: Permite a exclusão do cliente no banco de dados.
