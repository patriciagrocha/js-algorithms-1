# [M1S05] Ex 9 - Conceito do GitFlow

> Explique com suas palavras, o conceito do GitFlow e como ele é utilizado no controle de versão de um projeto.

## GitFlow: Controle de versão eficiente com Git

O GitFlow é um modelo de fluxo de trabalho para controle de versão utilizando o Git, um sistema de controle de versão distribuído amplamente utilizado. Esse modelo é baseado na criação de branches (ramificações) específicas para cada tipo de atividade no desenvolvimento de um projeto.

No GitFlow, o desenvolvimento ocorre em duas branches principais: a branch `master/main` e a branch `develop`. A `master/main` é usada para manter as versões estáveis e a `develop` para o desenvolvimento contínuo do projeto. Além dessas branches principais, o GitFlow utiliza branches auxiliares para implementação de recursos, correção de bugs e lançamento de versões.

O fluxo de trabalho típico no GitFlow é o seguinte:

1. **Branch `develop`**: É a branch principal do desenvolvimento. A partir dela, são criadas novas branches para cada nova funcionalidade, correção de bugs ou tarefas específicas.

2. **Branches de funcionalidades**: Para desenvolver uma nova funcionalidade, é criada uma branch a partir da `develop`. Essa branch é usada para trabalhar exclusivamente naquela funcionalidade, permitindo um desenvolvimento isolado e colaborativo.

3. **Branches de releases**: Quando uma versão está pronta para ser lançada, uma branch de release é criada a partir da `develop`. Nessa branch, são realizados testes finais, ajustes de última hora e preparação para o lançamento.

4. **Branches de hotfixes**: Se um bug crítico é descoberto em produção, é criada uma branch de hotfix a partir da `master/main`. Essa branch permite que o bug seja corrigido rapidamente e lançado em produção sem interferir no desenvolvimento das funcionalidades em andamento.

5. **Merge e fluxo de branch**: Após o trabalho ser concluído em uma branch (seja uma funcionalidade, release ou hotfix), ela é mesclada de volta para a branch principal correspondente (`develop` ou `master/main`). Assim, o código é incorporado ao projeto principal de forma controlada.

O GitFlow traz diversos benefícios, como uma estrutura clara para o desenvolvimento em equipe, a possibilidade de trabalhar em paralelo em diferentes funcionalidades, isolamento de erros e uma linha do tempo bem definida para o lançamento de versões estáveis. Essa abordagem facilita a colaboração e o controle de versão, tornando o desenvolvimento mais eficiente e organizado.

Para utilizar o GitFlow, você pode encontrar ferramentas e plugins específicos, além de comandos Git para criar e gerenciar as branches e realizar as mesclagens adequadas.

Utilizando esse modelo de fluxo de trabalho, equipes de desenvolvimento podem ter um melhor controle das versões do projeto, garantindo a estabilidade do código e facilitando a colaboração entre os membros da equipe.
