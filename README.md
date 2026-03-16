# 📋 API REST CRUD com Node.js

Uma **API REST simples** para gerenciamento de usuários, desenvolvida utilizando **Node.js** e **Express**.  
O projeto permite **criar, visualizar, atualizar e remover usuários**, retornando todos os dados em **formato JSON**, seguindo os princípios da **arquitetura REST**.

---

# 🚀 Demonstração

Após iniciar o servidor, a API estará disponível em:

```
http://localhost:3000
```

Exemplo de rota:

```
http://localhost:3000/usuarios
```

---

# 🛠 Tecnologias Utilizadas

- **Node.js** — Ambiente de execução JavaScript
- **Express.js** — Framework para criação da API
- **JavaScript** — Lógica da aplicação
- **JSON** — Formato de resposta da API
- **REST** — Arquitetura utilizada para as rotas

---

# ✨ Funcionalidades

- ➕ Criar novos usuários  
- 📄 Listar todos os usuários  
- 🔍 Buscar usuário por ID  
- ✏️ Atualizar dados de um usuário  
- ❌ Remover usuários da lista  
- 📦 Retorno de dados em formato JSON  

---

# 📂 Estrutura do Projeto

```
api-node-crud
│
├── node_modules
├── package.json
├── package-lock.json
└── server.js
```

### Descrição

| Arquivo | Função |
|--------|--------|
| **server.js** | Arquivo principal que contém o servidor e as rotas da API |
| **package.json** | Configuração do projeto Node.js |
| **node_modules** | Dependências instaladas |

---

# ⚙️ Instalação

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/seu-usuario/api-node-crud.git
```

---

### 2️⃣ Entrar na pasta do projeto

```bash
cd api-node-crud
```

---

### 3️⃣ Instalar as dependências

```bash
npm install
```

---

# ▶️ Executando o projeto

Inicie o servidor com:

```bash
node server.js
```

Se tudo estiver correto, aparecerá no terminal:

```
Servidor rodando em http://localhost:3000
```

---

# 📡 Endpoints da API

## 🔹 Verificar API

```
GET /
```

Resposta:

```json
{
  "mensagem": "API está funcionando corretamente"
}
```

---

## 🔹 Listar usuários

```
GET /usuarios
```

Resposta:

```json
[
  {
    "id": 1,
    "nome": "Thiago",
    "email": "thiagosouzin@gmail.com"
  }
]
```

---

## 🔹 Buscar usuário por ID

```
GET /usuarios/:id
```

Exemplo:

```
GET /usuarios/1
```

Resposta:

```json
{
  "id": 1,
    "nome": "Thiago",
    "email": "thiagosouzin@gmail.com"
}
```

---

## 🔹 Criar usuário

```
POST /usuarios
```

Body da requisição:

```json
{
  "nome": "Carlos",
  "email": "carlos@email.com"
}
```

---

## 🔹 Atualizar usuário

```
PUT /usuarios/:id
```

Body da requisição:

```json
{
  "nome": "Carlos Silva",
  "email": "carlos@email.com"
}
```

---

## 🔹 Deletar usuário

```
DELETE /usuarios/:id
```

---

# 🧪 Testando a API

Você pode testar a API utilizando:

- **Postman**
- **Insomnia**
- **Thunder Client (VS Code)**
- **cURL**

---

# 📈 Melhorias futuras

Algumas melhorias que podem ser adicionadas ao projeto:

- 💾 Integração com banco de dados (MongoDB ou MySQL)
- 📂 Estrutura em **MVC (Models, Controllers, Routes)**
- 🔐 Autenticação com **JWT**
- 📚 Documentação com **Swagger**
- 🧪 Testes automatizados

---

# 👨‍💻 Autor

Projeto desenvolvido para estudo de **Node.js**, **Express** e **APIs REST**.
