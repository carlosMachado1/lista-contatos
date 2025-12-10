# Lista de Contatos (projeto inicial)

API simples em Node.js + TypeScript para criar, listar e excluir contatos. É um projeto inicial: não usa SQL ou qualquer banco de dados; a persistência é feita em arquivo texto local (`data/list.txt`), o que facilita testar a lógica básica de rotas e manipulação de dados.

## Tecnologias
- Node.js + npm (script de dev com `tsx` e `--watch`)
- TypeScript 5
- Express 5 e middleware nativo de JSON/urlencoded
- Helmet para cabeçalhos de segurança
- `fs/promises` para persistir em arquivo

## Técnicas aplicadas
- Modelagem de API REST básica com rotas `POST`, `GET` e `DELETE`
- Validações mínimas de entrada (campo `name` obrigatório, tamanho mínimo)
- Separação em camadas: rotas (`src/routes`), serviços de dados (`src/services`), utilitários (`src/utils`)
- Persistência em arquivo texto (sem banco) para manter o escopo de projeto inicial

## Endpoints
- `POST /contatos` — body JSON `{ "name": "Joao" }` → 201 com o nome criado
- `GET /contatos` — retorna `{ "contatos": ["Felicity", ...] }`
- `DELETE /contatos?name=Joao` — remove pelo nome (case-insensitive) e retorna 200

## Como rodar
1. Node 18+ instalado.
2. Instalar deps: `npm install`
3. Subir servidor: `npm run start` (porta padrão: `http://localhost:3000`)
4. Testar com `curl`:
   - Criar: `curl -X POST -H "Content-Type: application/json" -d '{"name":"Maria"}' http://localhost:3000/contatos`
   - Listar: `curl http://localhost:3000/contatos`
   - Excluir: `curl -X DELETE "http://localhost:3000/contatos?name=Maria"`

## Estrutura
- `src/server.ts` — inicialização do Express e middlewares
- `src/routes/` — roteador principal e rotas de contatos
- `src/services/contacs.ts` — leitura/escrita do arquivo `data/list.txt`
- `data/list.txt` — armazenamento local dos contatos (projeto inicial, sem DB)

## Ordem sugerida de commits (GitHub/GitLab)
1. `chore: configura ambiente Node/TS (tsconfig, tsx, scripts)`
2. `chore: adiciona express e helmet`
3. `feat: cria servidor e roteador base`
4. `feat: adiciona rotas de contatos (POST/GET/DELETE)`
5. `feat: persiste contatos em arquivo local`
6. `docs: atualiza README com uso e endpoints`
7. Publicar: `git add . && git commit -m "..." && git push origin main` (ou `master`/branch desejada)
