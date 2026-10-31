# Portfólio Raquel Machado, Analista de Dados

Página de portfólio fictício de uma analista de dados, feita com HTML, CSS e Bootstrap 5 como atividade do curso.
O site tem as seções Início, Sobre, Projetos, Habilidades e Contato, todas acessíveis pelo menu.

## Como abrir

Baixe a pasta e abra o arquivo `index.html` no navegador. O Bootstrap é carregado por CDN, então é preciso estar online.

## Estrutura

```
portfolio-dados/
├── index.html
├── css/style.css
├── js/script.js
├── images/ (avatar e 3 gráficos em SVG)
└── README.md
```

## Recursos do Bootstrap 5 utilizados

### Sistema de Grid
- `.container`, `.row` e `.col-*` com breakpoints `sm`, `md` e `lg` (início, sobre, habilidades e contato)
- `.row-cols-1 .row-cols-md-2 .row-cols-lg-3` para os cards de projetos (1, 2 ou 3 colunas conforme a tela)
- Duas tabelas lado a lado no desktop e empilhadas no celular (`col-lg-5` e `col-lg-7`)
- `g-3`, `g-4`, `order-*`, `align-items-center` e `justify-content-center`

### Componentes
1. **Navbar** (Aula #16): menu fixo no topo, que vira botão "hambúrguer" no celular
2. **Cards** (Aula #12): projetos e números de destaque
3. **Botões** (Aula #07): chamadas para ação (`btn-info`, `btn-outline-light`, `btn-dark`)
4. **Formulário** (Aula #06): contato com `form-control`, `form-select`, `form-label` e validação
5. **Badges**: tecnologias e níveis de habilidade
6. **Alert**: aviso de mensagem enviada

### Estilização
- **Cores** (Aula #02): `bg-dark`, `bg-body-tertiary`, `text-info`, `text-secondary`, `text-bg-*`
- **Tipografia** (Aula #08): `display-4`, `display-6`, `lead`, `fw-bold`, `fw-semibold`, `fs-5`
- **Espaçamento** (Aula #05): `py-5`, `mb-3`, `me-2`, `mt-4`, `g-4`, entre outros

### Imagens e Tabelas
- **Imagens** (Aula #09): `img-fluid`, `rounded-circle`, `img-thumbnail`, `card-img-top`
- **Tabelas** (Aula #10): `table`, `table-striped`, `table-hover`, `table-dark` no cabeçalho e `table-responsive`

## Observações
- O `style.css` tem poucos ajustes (rolagem suave e margem das âncoras por causa da navbar fixa).
- O `script.js` só valida o formulário e mostra o aviso. Nenhum dado é enviado.
