# Site Luthier

Site institucional e comercial para uma oficina de lutheria, construído como uma landing page de uma única página com navegação por seções.

## Objetivo

Apresentar o estúdio de luthieria com uma interface elegante, escura e artesanal, focada em conversão, leitura rápida e navegação simples em desktop e celular.

## Stack

- Astro
- Tailwind CSS
- JavaScript vanilla para pequenas interações
- SVG para logo e ícones do projeto

## Estrutura atual

```text
SiteLuthier/
├── public/
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── LogoPalheta.astro
│   │   └── ServiceIcon.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── contato.astro
│   │   ├── galeria.astro
│   │   ├── servicos.astro
│   │   └── sobre.astro
│   └── styles/
│       └── global.css
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
└── README.md
```

## O que já foi implementado

### Identidade visual

- Logo em formato de palheta musical, feita em SVG.
- Paleta com fundo carvão, vermelho-verniz e texto marfim.
- Tipografia com Cormorant Garamond nos títulos e Inter no corpo.

### Interface

- Layout em uma única página com navegação por âncoras.
- Seções principais:
  - Início
  - Serviços
  - Galeria
  - Sobre
  - Contato
- Navbar fixa com menu desktop e menu mobile.
- Footer com logo, identidade visual e links sociais.

### Serviços e interações

- Cards com ícones SVG substituindo emojis.
- Hover nos cards com borda vermelha e efeito de destaque.
- Botão CTA em estilo de palheta.
- Scroll suave entre as seções.
- Menu mobile funcional com abertura e fechamento ao clicar nos links.

### Conteúdo

- Hero principal com chamada de ação.
- Seção de serviços com os principais atendimentos da oficina.
- Galeria com grid de imagens.
- Seção “Sobre” com estatísticas e descrição da oficina.
- Seção de contato com informações e formulário visual.

## Como rodar

Instale as dependências:

```bash
npm install
```

Inicie o servidor local:

```bash
npm run dev
```

O Astro geralmente sobe em:

```text
http://localhost:4321/
```

Gere a versão de produção:

```bash
npm run build
```

## Observações técnicas

- O projeto usa Tailwind via `postcss.config.cjs` e `tailwind.config.cjs`.
- O CSS global está em `src/styles/global.css`.
- A logo aceita variação de tamanho pelo componente `LogoPalheta.astro`.
- Os serviços usam o componente `ServiceIcon.astro` para manter consistência visual.

## Próximos passos possíveis

- Trocar as imagens remotas da galeria por arquivos locais otimizados em WebP.
- Tornar o formulário de contato funcional com envio real.
- Adicionar animações de entrada mais refinadas.
- Incluir SEO local com metadados e dados estruturados.

## Referência visual

A interface foi ajustada com base no protótipo visual anexado, priorizando fidelidade estética e navegação rápida em uma landing page única.
