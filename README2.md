# Passos para replicar este projeto

## 1. primeiro comando
    Setup Node.js package.json
    npm init -y

## 2. segundo comando
    Add TypeScript as a dev dependency
    npm install typescript --save-dev

## 3. terceiro comando
    Install ambient Node.js types for TypeScript
    npm install @types/node --save-dev

## 4. quarto comando
    Create a tsconfig.json
    npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true

## 5. quinto passo:
    - criar ficheiro src/app.ts
    Compilar:
    npx tsc ou tsc

## 6. sexto passo:
    - sexto passo (executar a aplicação):
    node build/app.js

## 7. Criar repositório git
    
    TODO

## 8. Criar ficheiro .gitignore

    TODO

## 9. Adding Jest Testing tool to the project

```shell
$ npm install jest --save-dev
$ npm install ts-jest --save-dev
$ npm install @types/jest --save-dev
$ npm install ts-node --save-dev
$ npm install jest-junit --save-dev
$ npm install jest-html-reporter --save-dev
$ npm install jest-html-reporters --save-dev
```

## 10. Add a test command

    ...
    "scripts": {
        ...
        "test": "jest --coverage --coverageReporters=\"text\" --coverageReporters=\"html\" --coverageReporters=\"json\"",
        ...
    },
    ...

## 11. Add the tests (in __tests__) and the code to be tested

## 12. Run the tests

    npm test
