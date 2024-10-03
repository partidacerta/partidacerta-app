# Partida Certa

## Tecnologias utilizadas no desenvolvimento

- React Native
- Expo
- Typescript
- Zustand
- Axios
- Styled Components
- Reactotron

## Para executar o projeto

1. Instale as dependências

```bash
   npm install
```

2. Iniciando a aplicação

```bash
   npx expo start
```

3. Iniciando a aplicação limpando o cache

```bash
   npx expo start -c
```

## Padronização na criação de banches, commits e pull requests

1. Padrão de branch:

```bash
   prefix/000-nome-da-branch
```

2. Padrão de commit:

```
   "prefix: nome do commit"
```

3. Padrão de Pull request:

```
   "Prefix: Título da pull request"
```

4. Prefixos que devem ser utilizados na criação de branches e realização de commits:

- `feat`: Para novas features e código novo em geral.
- `fix`: Correções em algo que não está funcionando corretamente.
- `test`: Para código de testes.
- `merge`: Para realizar o merge de uma branch na outra, subir correção de conflitos entre arquivos ou atualização (rebase) entre branches.
- `style`: Melhorias de estilo das interfaces (por exemplo, CSS).
- `refactor`: Melhorias no código que não modificam as funcionalidades existentes.
- `chore`: Para coisas relacionadas a build, configurações e afins, como alterações no `package.json`.
- `docs`: Ajustes na documentação, README e outros.
- `revert`: Caso seja necessário fazer um revert, use esse prefixo.
- `perf`: Ajustes de performance.
- `build`: Código que ajusta o build do projeto.
- `ci`: Ajustes nas pipelines e integração contínua.

## Build da aplicação - Preview ExpoGo

1. Defina a branch que será utilizada e informe a mesma no comando de inicialização do build

2. Verifique a versão do app no arquivo package.json e app.json, depois informe na mensagem do build qual a versão utilizada

3. Para inciar o build execute o seguinte comando alterando o nome da branch e a mensagem

```bash
   eas update --branch branchName --message "Version: 1.0.1"
```
