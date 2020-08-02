# todo-xstate-nextjs

## Rodando o projeto

Primeiro é preciso baixar as dependências com o seguinte comando:

	npm i

Agora é preciso criar a base de dados (*sqlite*), para isso basta usar os seguinte comando:

	npm run knex:migrate

Caso deseje você pode iniciar a base com alguns dados, utilizando o comando:

	npm run knex:seed

Para executar o projeto no modo de desenvolvimento basta usar o comando:

	npm run dev