# Noteapp

O Noteapp é uma aplicação web que simula um Bloco de Notas, permitindo ao usuário criar, editar, atualizar e deletar notas.

<img src="https://github.com/koavdev/urbe-project/assets/81250968/334f11b9-6f3d-4ee1-8b43-4239e1e8d20a">

## Tecnologias
- Django
- React
- SQLite

## Documentação
A aplicação web foi desenvolvida em duas partes:
- Backend: localizado nos diretórios <strong>urbenotes</strong> e <strong>api</strong>, e no arquivo <strong>db.sqlite3</strong> (banco de dados);
- Frontend: localizado no diretório <strong>frontend</strong>.

No diretório <strong>urbenotes</strong>, temos a estrutura do projeto Django, e em <strong>api</strong>, temos a estrutura de arquivos da aplicação. Alguns arquivos importantes do backend são:

- api\models.py = modelo da classe Nota;
- api\urls.py = rotas da aplicação;
- api\utils.py = funções de CRUD;
- api\views.py = requisições HTTP (API RESTful);
- api\serializers.py = conversão de modelos Django para JSON;
- urbenotes\settings.py = configurações do projeto Django;

Já no diretório <strong>frontend</strong>, temos a estrutura do projeto React, que disponibiliza uma interface gráfica para o usuário utilizar a aplicação web. Alguns diretórios importantes do frontend são:

- build = aplicação em produção;
- src\components = botão de adicionar, cabeçalho e listar Notas;
- src\pages = páginas da Nota e lista das Notas;

O arquivo <strong>db.sqlite3</strong> é responsável pelo banco de dados da aplicação, armazenando as informações das Notas, tais como: id, texto, data de criação, data de atualização, entre outros dados.

## Bibliotecas
As principais bibliotecas utilizadas neste projeto foram:

- <strong>[Django REST Framework](https://www.django-rest-framework.org/):</strong> criação de APIs em aplicações Django;
- <strong>[React Router DOM](https://reactrouter.com/en/main):</strong> roteamento em aplicações React;
- <strong>[Django CORS Headers](https://github.com/adamchainz/django-cors-headers):</strong> gerenciamento do Cross-Origin Resource Sharing em aplicações Django.

## Desenvolvimento
O projeto foi construído através da ferramenta Visual Studio Code, que nos permitiu ter um gerenciamento otimizado do projeto como um todo. Utilizou-se um ambiente virtual para instalar as dependências Python (arquivo <strong>requirements.txt</strong>). Após instala-las, criamos a estrutura do projeto com o comando `django-admin startproject urbenotes`. 

Após a criação, seguimos para a criação da aplicação Django, através do comando <strong>`python manage.py startapp api`</strong>. Nesta etapa, é necessário conectar o núcleo do projeto e  adicionar o Django REST Framework à aplicação, acessando o arquivo <strong>settings.py</strong> e adicionando os seguintes códigos em <strong>INSTALLED_APPS:</strong> `'api.apps.AppConfig'` e `'rest_framework'`. Para importar o Django CORS Headers na aplicação, é necessário adicionar os códigos: `'corsheaders'` em <strong>INSTALLED_APPS</strong>, `'corsheaders.middleware.CorsMiddleware'` em <strong>MIDDLEWARE</strong>, e `CORS_ORIGIN_ALLOW_ALL = True` ao final da página.

Nos modelos para o banco de dados, criamos a nossa classe <strong>Nota</strong>, definindo os seus atributos <strong>body</strong> (texto da Nota), <strong>updated</strong> (data de atualização) e <strong>created</strong> (data de criação). Em seguida, executamos o comando `python manage.py makemigrations` para criar a classe Migration, e depois ser aplicada as alterações no banco de dados, a partir da execução do comando `python manage.py migrate`.

No arquivo <strong>views.py</strong> é onde criamos a nossa API RESTful, definindo os métodos HTTP que serão requisitados pelo usuário em nossa aplicação. Neste caso, foram criadas as views <strong>getRoutes</strong> (retorna as rotas da aplicação), <strong>getNotes</strong> (retorna uma lista das notas, caso seja uma requisição GET, ou cria uma nova nota caso seja uma requisição POST) e <strong>getNote</strong> (retorna uma única nota, caso seja uma requisição GET, ou altera uma única nota, caso seja uma requisição PUT, ou deleta uma única nota, caso seja uma requisição DELETE).

A configuração das rotas da aplicação é gerenciada em api/<strong>urls.py</strong>, sendo possível acessar as seguintes rotas:

- notes/ - configurada pela view getNotes;
- notes/<<str:id>>/ - configurada pela view getNote;

A aplicação React foi criada através do comando `npx create-react-app frontend`, inicializando a estrutura de arquivos do projeto. Em seguida, instalou-se a biblioteca React Router, responsável pelo gerenciamento das rotas no frontend, através do comando `npm install react-router-dom@5.3.0`*. 

Feita a configuração inicial, criamos os componentes da aplicação. O componente Header contém o título exibido na Home, o componente AddButton exibe o botão de adicionar uma nova nota, e o componente ListItem é responsável pela exibição da nota na Home, com o ajuste de título, corpo e data da nota.

Como temos duas rotas, foi criada duas páginas. A página NotePage é responsável pela visualização da criação ou alteração de uma nota, assim como deleta-la através do botão Delete. Já a página NotesListPage é onde visualizamos a lista com as notas existentes/criadas.

Por fim, executamos o comando `npm run build` para construir um diretório contendo toda a nossa aplicação React, para então integra-la à aplicação Django, dando origem ao <strong>Noteapp</strong>.



*A versão 5.3.0 foi utilizada como paliativo devido a um bug encontrado durante o desenvolvimento da aplicação.

## Instalação
<strong>Windows:</strong>
<br>
1. Clone o projeto
`git clone https://github.com/koavdev/urbe-project.git`

2. Crie um ambiente virtual
`python3 -m venv env`

3. Ative o ambiente virtual
`.\env\Scripts\Activate`

4. Instale os requisitos
`pip install -r requirements.txt`

5. Execute o servidor
`python3 manage.py runserver`

<br>

<strong>Mac/Linux:</strong>
<br>
1. Clone o projeto
`git clone https://github.com/koavdev/urbe-project.git`

2. Crie um ambiente virtual
`python3 -m venv env`

3. Ative o ambiente virtual
`source env/bin/activate`

4. Instale os requisitos
`pip install -r requirements.txt`

5. Execute o servidor
`python3 manage.py runserver`