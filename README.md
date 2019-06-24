# Financial Manager

## Migrations

Criar tabelas

```
node_modules/.bin/knex migrate:latest --env test
```

Restaurar

```
node_modules/.bin/knex migrate:rollback --env test
```

## Postgres

conectar ao banco
```ssh
docker exec -it db psql -U postgres

lista os bancos de dados
\list

conecta ao banco de dados
connect financial

lista as tabelas
\dt
```

criar database
```
docker exec -it db psql -U postgres -c "create database financial"
```