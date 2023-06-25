<p>
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p>A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p><p>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>

## Installation

1. Clone the repository
    ```bash
    $ git clone ...
    ```

2. Install dependencies
    ```bash
    $ npm install
    ```

3. Install nest CLI
    ```bash
    $ npm install -g @nestjs/cli
    ```
   
4. Run database
    ```bash
    $ docker-compose run -d
    ```
5. Clone the ```.env.template``` file and rename it as ```.env```
6. Assigns the environment variables defined in the ```.env``` file

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Seed Database
````
GET http://localhost:3000/api/v2/seed
````