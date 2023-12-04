# DevSkin

Documentação do Teste Node + MongoDB
Este documento fornece instruções detalhadas para a realização do teste de habilidades em MongoDB, Node.js, Express e ORM.

Parte 1: Configuração do Projeto
1.1 Criar a aplicação Node.js com Express:

Novo projeto Node.js usando o comando npm init -y.

Instalação o framework Express com npm install express.

Configuração dos arquivo principais (database.js, index.js e server.js) para iniciar o servidor, conectar com o bando de dados com Express.

1.2 Configurar ORM com MongoDB (Mongoose):

Instalação do ORM para MongoDB (Mongoose) npm install mongoose.

Configurar a conexão com o banco de dados MongoDB no arquivo de configuração database.js.

Foi utilizado o MongoDB Atlas (em nuvem).

Especificamente para esse projeto teste as variaveis do banco estão inseridas no arquivo database.js para ser utilizado pelo avaliador, ao inves de ser inserida em uma arquivo .env como de costume. (Foi uma escolha extraordinaria para o caso)

Para inicializar o serviço da aplicação rodar o comando npm start.

Parte 2: Modelagem e CRUD
2.1 Modelo para "Produto" no MongoDB:

Foi definido um modelo para a entidade "Produto" utilizando o schema do ORM MongoDB(Mongoose).

Foi criado os campos nome, preço e descrição, e aplicado as validações necessárias.

2.2 Rotas CRUD para "Produto":

Implementado as operações CRUD para a entidade "Produto".

Validando a entrada do usuário, garantindo que os dados estejam corretos antes de persistir no banco de dados.

Parte 3: Consultas Avançadas
3.1 Rota para Listar Produtos com Preço Acima de um Valor Especificado:

Foi implementado uma rota que lista todos os produtos com preço acima de um valor fornecido como parâmetro.

3.2 Rota para Listar Produtos com Palavra-chave na Descrição:

Foi implementado uma rota que lista produtos contendo uma palavra-chave específica na descrição fornecido como parâmetro.

Parte 4: Testes
4.1 Escrever Testes Unitários:

Intalado a biblioteca de teste Jest atraves do comando npm install --save-dev jest supertest.

Adicione no arquivo package.json

JavaScript
"scripts": {  
"test": "jest"
},
Para executar os testes, rode o comando npm test.

Foi implementado testes de todos os endpoints no Postman.
