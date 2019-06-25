module.exports = {
  test: {
    client: 'pg',
    version: '9.6',
    connection: {
      host: 'db',
      user: 'postgres',
      database: 'financial',
    },
    migrations: {
      directory: 'src/migrations',
    },
  },
};
