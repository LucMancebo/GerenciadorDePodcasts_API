# 🎙️ Gerenciador de Podcasts API


API RESTful para gerenciamento de podcasts construída com **Node.js** e **TypeScript** sem uso de frameworks externos, utilizando apenas módulos nativos do Node. Este projeto faz parte da formação **Node.js Fundamentals** da DIO!

## 📋 Índice

- [🚀 Sobre o Projeto](#---sobre-o-projeto)
- [🛠 Tecnologias](#---tecnologias)
- [📦 Instalação](#---instala--o)
- [🎯 Uso](#---uso)
- [📡 Endpoints](#---endpoints)
- [📁 Estrutura do Projeto](#---estrutura-do-projeto)
- [💻 Exemplos de Código](#---exemplos-de-c-digo)
- [📚 Documentação de Referência](#---documenta--o-de-refer-ncia)
- [🤝 Como Contribuir](#---como-contribuir)


## 🚀 Sobre o Projeto

Esta API permite gerenciar uma coleção de podcasts com operações CRUD. No momento só há implementado o metodo GET que retorna a lista de podcasts e filtra os episódios pelo nome do Podcast.

### Recursos

- ✅ TypeScript para tipagem estática
- ✅ Arquitetura modular e escalável
- ✅ HTTP nativo do Node.js
- ✅ Filtros por categoria
- ✅ Códigos de status HTTP padronizados

## 🛠 Tecnologias

- [Node.js](https://nodejs.org/) - Runtime JavaScript
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado do JavaScript
- [TSX](https://github.com/privatenumber/tsx) - Executor TypeScript para Node.js (Não é preciso para rodar no Node 22)

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/LucMancebo/GerenciadorDePodcasts_API.git

# Entre no diretório
cd GerenciadorDePodcasts_API

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run start:dev

# Execute em produção
npm run start:dist
```

## 🎯 Uso

A API roda por padrão na porta `3333`. Após iniciar o servidor, acesse:

```
http://localhost:3333
```

## 📡 Endpoints

### Listar Todos os Podcasts

```http
GET /api/list
```

**Resposta:**

```json
[
  {
    "podcastName": "Flow Podcast",
    "episode": "PODPAH - #245",
    "videoId": "abc123",
    "categories": ["humor", "entretenimento"]
  }
]
```

### Filtrar por Podcast

```http
GET /api/episode?p=flow
```

**Parâmetros de Query:**

- `p` - Nome do podcast

**Resposta:**

```json
{
  "statusCode": 200,
  "body": [
    {
      "podcastName": "flow",
      "episodio": "CBUM - Flow #319",
      "videoId": "pQSuQmUfS30",
      "categories": ["saúde", "bodybuilder", "esporte"]
    }
  ]
}
```

## 📁 Estrutura do Projeto

```
├── 📁 docs
├── 📁 src
│   ├── 📁 controllers
│   │   └── 📄 podcasts_controller.ts
│   ├── 📁 models
│   │   ├── 📄 podcast_model.ts
│   │   └── 📄 podcast_transfer_model.ts
│   ├── 📁 repositories
│   │   ├── ⚙️ podcasts.json
│   │   └── 📄 podcasts_repository.ts
│   ├── 📁 routes
│   │   └── 📄 routes.ts
│   ├── 📁 services
│   │   ├── 📄 filter_episodes.ts
│   │   └── 📄 list_episodes_service.ts
│   ├── 📁 utils
│   │   ├── 📄 content_type.ts
│   │   ├── 📄 http_methods.ts
│   │   └── 📄 status_code.ts
│   ├── 📄 app.ts
│   └── 📄 server.ts
├── ⚙️ .gitignore
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── 📝 readme.md
└── ⚙️ tsconfig.json
```

## 💻 Exemplos de Código

### Enum de Status HTTP

na pasta **utils** listei vários enuns, porém só é utilizado o **200 e 204** no projeto

```typescript
export enum StatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  ...
}
```

### Modelo de Dados

```typescript
export interface PodcastModel {
  podcastName: string;
  episode: string;
  videoId: string;
  categories: string[];
}

export interface PodcastTransferModel {
  statusCode: number;
  body: podcastModel[];
}
```

### Servidor HTTP Nativo

#### App.ts

```typescript
import * as http from "http";
import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcasts_controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http_methods";

export const app = async (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  const baseUrl = req.url?.split("?")[0];

  if (req.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(req, res);
  }
  if (req.method === HttpMethod.GET && baseUrl === Routes.EPISODES) {
    await getFilterEpisodes(req, res);
  }
};
```

#### Server.ts

```typescript
import * as http from "http";
import { app } from "./app";

const server = http.createServer(app);

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`servidor iniciado na porta ${port}`);
});
```

## 📚 Documentação de Referência

- [Node.js HTTP Module](https://nodejs.org/api/http.html) - Módulo HTTP nativo do Node.js
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) - Guia oficial do TypeScript
- [Node.js URL API](https://nodejs.org/api/url.html) - Manipulação de URLs
- [HTTP Status Codes](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status) - Códigos de status HTTP

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT.

## 👨‍💻 Autor

**Lucas Mancebo** - GitHub: [@LucMancebo](https://github.com/LucMancebo)

---

⭐ Deixe uma estrela se este projeto te ajudou!
