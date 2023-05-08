<h1 align="center">
Challenge Total Coin API
</h1>

<div align="center">

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)![MicrosoftSQLServer](https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white)

</div>

## Enunciado del Challenge:


Se requiere:

* Construir una API Rest que tenga la capacidad de crear y eliminar botones, registrar que se apretó un botón y de contar cuantas veces se apretó cada botón.

Aclaraciones:
* Se requiere crear una API Rest, una DB SQL, el lenguaje y el motor a elegir son a elección pero es preferible C# o Node.js y SQL Server o
PostgreSQL.

## Desarrollo

### Requisitos previos

* Tener instalado una versión 14 o superior de [Node Js](https://nodejs.org/en)

### Setup

Se debe clonar el repositorio del proyecto:
```
git clone https://github.com/CristhianLeal/total-coin-api.git
```

### Instlar las dependencias: 

```
npm install 
```

### Scripts Disponibles

| Script         | Descripción                                         |
| -------------- | --------------------------------------------------- |
| npm run dev    | Inicia el servidor en el modo desarrollo            |
| npm start      | Inicia el servidor en el modo producción            |  


## Dependencias 
- [cors](https://github.com/expressjs/cors#readme) Proporciona un middleware para conectar express.
- [dotenv](https://github.com/motdotla/dotenv#readme) Carga las variables de entorno desde el archivo .env
- [express](https://expressjs.com/) framework para Node.js.
- [msssql](github.com/tediousjs/node-mssql) Microsoft SQL Server, cliente para trabajar con sql en Node.js
- [morgan](github.com/expressjs/morgan) Registro de las request HTTP.

## Estructura de carpetas

```
total-coin-front
├── node_modules
└── src
    ├── controllers
    ├── database
    ├── routes
    ├── config.js
    ├── server.js
├── .env
├── .gitignore
├── app.js
├── package-lock.json
├── package.json
├── README.md
```