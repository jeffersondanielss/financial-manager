# Financial Manager

## Run Application
The below command will run postgres database and the API REST.
```
docker-compose up -d
```
## Run Tests
```
docker-compose run --rm app npm run test
```

## Migrations
Create tables

```
node_modules/.bin/knex migrate:latest --env test
```

Drop tables

```
node_modules/.bin/knex migrate:rollback --env test
```

## Postgres Commands
Connect database

```ssh
docker exec -it db psql -U postgres

# lista os bancos de dados
\list

# conecta ao banco de dados
connect financial

# lista as tabelas
\dt
```

Create database
```
docker exec -it db psql -U postgres -c "create database financial"
```