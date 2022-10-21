# scuti-react-codebase

## Code Editor and Extensions
[VScode](https://code.visualstudio.com/)
[Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
[EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
[Typescript React code snippets](https://marketplace.visualstudio.com/items?itemName=infeng.vscode-react-typescript)

## Package
[React](https://17.reactjs.org/) v17

[react-router-dom](https://reactrouter.com/docs/en/v6/getting-started/overview) v17

[env-cmd](https://github.com/toddbluhm/env-cmd) v10

[babel/core](https://babel.dev/docs/en/babel-core) v7

[node-sass](https://github.com/sass/node-sass) v7

[Typescript](https://www.typescriptlang.org/) v4

[Redux Toolkit](https://redux-toolkit.js.org/) v1

[RTK-Query](https://redux-toolkit.js.org/rtk-query/overview) v1

[Axios](https://axios-http.com/) v0.26.1

[I18next](https://www.i18next.com/) v21

[Webpack](https://webpack.js.org/) v5

[Eslint](https://eslint.org/) v8

[lint-staged](https://github.com/okonet/lint-staged/) v12

[Husky](https://typicode.github.io/husky/#) v7


## Installation
- Make sure that you have Node.js v14, npm v8, yarn v1, Docker v20, docker-compose v1 or above installed.

- Setup in order to install dependencies :
```bash
yarn install
```

- Move to the appropriate directory: cd <YOUR_PROJECT_NAME>.

- Environment:
```bash
cp .env.example .env.development
```

## Quick Start

- The first Build and start container dev:
```bash
docker-compose up --build
```

- Start container dev:
```bash
docker-compose up
```

- Stop container dev:
```bash
docker-compose down
```

- See the example app at:
```bash
http://localhost:5001
```

## Build and Deploy
- Move to the appropriate directory: cd <YOUR_PROJECT_NAME>.

- Environment:
```bash
cp .env.example .env.production
```

- Build images:
```bash
docker build -t react-codebase:v1 .
```

- Run images:
```bash
docker run -p 5001:5001 react-codebase:v1
```

## ISC - DuyetNN
- Email: duyetnn@scuti.asia
- Phone: 0969.131.921
