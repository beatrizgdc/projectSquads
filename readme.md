# Projeto Squads

## 📂 Estrutura de Pastas

```plaintext
/projeto
|-- /backend
    |-- /config             # Configurações gerais (MongoDB, JWT, etc.)
    |   |-- db.js           # Conexão ao banco de dados MongoDB
    |-- /controllers        # Lógica de negócios (Usuários, Produtos, Pedidos)
    |   |-- userController.js
    |-- /models             # Definição dos modelos Mongoose
    |   |-- User.js         # Modelo do Usuário
    |-- /routes             # Definição das rotas da API
    |   |-- userRoutes.js    # Rotas relacionadas a usuários (registro, login)
    |-- /middleware         # Middlewares para autenticação, erros, etc.
    |   |-- authMiddleware.js # Middleware de autenticação JWT
    |-- /uploads            # Pasta para armazenar imagens (usada pelo Multer)
    |-- /utils              # Funções utilitárias (envio de e-mails, etc.)
    |   |-- emailSender.js  # Configuração do Nodemailer para envio de e-mails
    |-- /public             # Arquivos estáticos (se houver)
    |-- .env                # Variáveis de ambiente (MongoDB URI, JWT secret, etc.)
    |-- server.js           # Arquivo principal do servidor
    |-- package.json        # Dependências do Node.js

|-- /frontend
    |-- /css                # Estilos CSS para o site
    |   |-- styles.css      # Arquivo principal de estilos
    |-- /img                # Imagens usadas no site
    |   |-- logo.png        # Exemplo de logo
    |-- /js                 # Scripts JavaScript simples
    |   |-- main.js         # Script principal para interações com o back-end
    |-- /pages              # Páginas HTML
    |   |-- index.html      # Página inicial (home)
    |-- /uploads            # Imagens de produtos (opcional, pode ser apenas no backend)
    |-- .env                # Variáveis de ambiente (ex: URL do backend)
```

## Siga as instruções abaixo para configurar o projeto em sua máquina local.

### 🔄 Clonando o Repositório

1. **Clone o repositório**  
   Abra seu terminal e execute o seguinte comando para clonar o repositório:

   ```bash
   git clone https://github.com/beatrizgdc/projectSquads.git
   ```

2. **Entre na pasta do projeto**  
   Navegue até a pasta do projeto:

   ```bash
   cd projeto
   ```

### ⚙️ Configurando o Backend

1. **Entre na pasta do backend**

   ```bash
   cd backend
   ```

2. **Inicialize o projeto Node.js**  
   Isso criará um arquivo `package.json`:

   ```bash
   npm init -y
   ```

3. **Instale as dependências principais**

   ```bash
   npm install express mongoose dotenv multer nodemailer bcrypt jsonwebtoken
   ```

4. **Instale as dependências de desenvolvimento**

   ```bash
   npm install --save-dev nodemon
   ```

5. **Configure os scripts no `package.json`**  
   Adicione o seguinte ao seu `package.json`:

   ```json
   "scripts": {
     "start": "node server.js",
     "dev": "nodemon server.js"
   }
   ```

6. **Crie o arquivo `.env`**  
   Crie um arquivo `.env` na raiz do diretório `backend` com as variáveis de ambiente:

   ```
   MONGO_URI=sua-string-de-conexao-mongodb
   JWT_SECRET=sua-chave-secreta-jwt
   EMAIL_USER=seu-email-de-envio
   EMAIL_PASS=sua-senha-de-email
   ```

### 🌐 Configurando o Frontend

1. **Entre na pasta do frontend**

   ```bash
   cd ../frontend
   ```

2. **Instale as dependências do frontend**  
   (Se houver dependências específicas para o frontend, instale-as aqui. Caso contrário, apenas verifique se o código está conforme necessário.)

## 🧑‍💻 Usando Branches

### 1. **Criar uma nova branch**

Antes de começar a trabalhar em uma nova funcionalidade ou correção de bug, crie uma nova branch:

```bash
git checkout -b nome-da-sua-branch
```

### 2. **Fazer alterações e commitar**

Após realizar as alterações, adicione os arquivos e faça um commit:

```bash
git add .
git commit -m "Descrição das suas alterações"
```

### 3. **Enviar a branch para o repositório remoto**

```bash
git push origin nome-da-sua-branch
```

## 🔄 Fazendo o Merge

Quando você terminar de trabalhar na sua branch e estiver pronto para integrar as alterações, siga os passos abaixo:

1. **Volte para a branch principal (geralmente `main` ou `master`)**

   ```bash
   git checkout main
   ```

2. **Atualize a branch principal com as últimas alterações do remoto**

   ```bash
   git pull origin main
   ```

3. **Faça o merge da sua branch**

   ```bash
   git merge nome-da-sua-branch
   ```

4. **Resolva conflitos, se houver**  
   Se houver conflitos, o Git indicará quais arquivos precisam ser resolvidos. Edite os arquivos conforme necessário e depois adicione os arquivos resolvidos:

   ```bash
   git add .
   ```

5. **Finalize o merge com um commit**

   ```bash
   git commit -m "Merge da branch nome-da-sua-branch"
   ```

6. **Envie as alterações para o repositório remoto**

   ```bash
   git push origin main
   ```

## 🚀 Iniciando o Servidor

Para iniciar o servidor em modo desenvolvimento, utilize:

```bash
npm run dev
```

Para iniciar o servidor em modo produção:

```bash
npm start
```

## 📚 Contribuindo

Se você deseja contribuir para este projeto, sinta-se à vontade para criar uma nova branch e submeter um Pull Request com suas alterações!

