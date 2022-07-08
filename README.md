# DESAFIO POKÉAPI FRONT-END
O desafio consiste em criar uma interface interativa para pesquisa e exibiçao de dados de pokémons com base na api PokéApi.


## Requisitos básicos da aplicação:

- A página principal deve conter uma lista de Cards definida pelos desenvolvedores exibindo, pelos menos, o nome e a foto de cada pokémon (a foto pode ser apenas a disponível no valor da chave `front-default` dentro do objeto de `sprites` nos dados de cada pokémon);
- Na api essa lista pode ser definida como o exemplo a seguir: [https://pokeapi.co/api/v2/pokemon/?offset=151&limit=302](https://pokeapi.co/api/v2/pokemon/?offset=151&limit=302), aonde o offset é igual ao id do primeiro pokémon que você deseja exibir na lista indo até o limit, sendo o id do pokémon limite;
- Cada Card também deve ter um background-color definido com base no tipo do pokémon; exemplo: tipo água, background azul, tipo elétrico, background amarelo (vocês podem encontrar a lista com todos os tipos de pokémon no seguinte endpoint [https://pokeapi.co/api/v2/type/](https://pokeapi.co/api/v2/type/)); 
- Na página inicial, deve conter um input para pesquisa de pokémon por nome ou id e um botão para buscar;
- A requisição para a pesquisa ficaria algo como `https://pokeapi.co/api/v2/pokemon/${nameOrId}`, sendo `nameOrId` o valor do input;
- O Card deve ter uma definição de hover a critério dos desenvolvedores;
- Ao ser clicado, o Card de pokémon deve abrir um modal ou direcionar para uma página aonde será exibido, pelo menos, os seguintes dados: `name`, `type` e, pelo menos, três `stats`, `hp`, `attack` e `defense`;
- O Modal ou Página de exibição dos dados individuais de cada pokémon ficará a critério dos desenvolvedores para avaliação da criatividade dos mesmos;
- Vocês podem seguir a risca o protótipo disponível no Zeplin ou utilizar da criatividade para criar um layout único, porém, é importante ressaltar que, tanto a fidelidade ao protótipo, quanto a beleza e criatividade do layout, pode contar pontos positivos ou negativos de acordo com, estilo, criatividade, responsividade e conceitos de UI e UX;
- Qualquer feature a mais dos requisitos solicitados contarão pontos positivos, desde que o requisitos mínimos sejam atendidos (fazer um bom "feijão com arroz" conta mais do que fazer coisas além do básico mas mal feitas);


## Avaliação do Projeto:
### Os canditados serão avaliados seguindo os seguintes critérios: 
- O Projeto deve ser desenvolvido utlizando, exclusivamente, o framework ReactJs com react-hooks;
- Na há obrigatoriedade para uso de typescript, porém, pode ser utilizado;
- Vocês podem utilizar qualquer outra lib para react ou ferramenta de design para complementar o projeto, mas é importante destacá-las na descrição de seu projeto e o porque de utilizá-las;
- A organização e estrutura dos commits é fundamental assim como o trabalho em equipe;
- Cada membro da equipe deverá fazer uma breve descrição do que fez no projeto, bem como as suas facilidades e as suas dores no processo de desenvolvimento;
- A entrega incompleta do projeto não é fator excludente, pois queremos avaliar como vocês se saem diante do problema apresentado e temos ciência de que o período para desenvolvimento é curto; (é mais importante qualidade do que quantidade na entrega);
- A qualidade do código, utilização dos hooks de maneira correta, design patern do projeto, boas práticas de código, UI e UX e o trabalho em equipe serão os fatores que mais contarão para avaliação de cada candidato;
- O projeto será realizado em duplas ou trios, se necessário, pois queremos avaliar como vocês se saem trabalhado em equipe, porém o processo de avaliação será feito de maneira individual;


## Documentação completa da API:

[PokéApi](https://pokeapi.co/)

## UI do Projeto no Adobe XD:

[Adobe XD PokéDex](https://xd.adobe.com/view/a7af24da-99c7-49ff-a2a2-cadf18a6dee3-f2fc/)

## Assets para auxiliar no design:

[Link da pasta](https://drive.google.com/drive/folders/18mH7xEBV63Uv2Bq7tV2dQUT_1VuuccMA?usp=sharing)
