# Mosaico

Landing page do projeto Mosaico, desenvolvida com Next.js, React, TypeScript e CSS. A página apresenta o manifesto da marca, seus principais conceitos e um formulário para entrar na lista de espera.

## Requisitos

- Node.js 20 ou superior
- npm

## Instalação

Clone o repositório, acesse a pasta do projeto e instale as dependências:

```bash
npm install
```

## Desenvolvimento

Inicie o servidor local:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador. O Next.js atualiza a página automaticamente após alterações nos arquivos.

## Produção

Gere a build e inicie o servidor de produção:

```bash
npm run build
npm start
```

## Scripts disponíveis

| Script | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a build de produção |
| `npm start` | Executa a aplicação em modo de produção |
| `npm run lint` | Verifica problemas de lint |

## Estrutura principal

- `app/page.tsx`: página principal da landing page
- `app/waitlist-form.tsx`: formulário client-side da lista de espera
- `app/globals.css`: estilos globais e responsivos
- `app/layout.tsx`: layout e metadados da aplicação
- `public/`: arquivos públicos e assets estáticos

## Observação

O formulário da lista de espera é demonstrativo: a validação ocorre no navegador e o envio é simulado localmente. Nenhum endereço de e-mail é persistido ou enviado para um serviço externo.