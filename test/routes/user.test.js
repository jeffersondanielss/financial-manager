const request = require('supertest');
const { internet } = require('faker');

const app = require('../../src/app');

describe('users', () => {
  beforeAll((done) => {
    app.db.migrate.latest()
      .then(() => done());
  });

  afterAll((done) => {
    app.db.migrate.rollback()
      .then(() => done());
  });

  test('should return all users', async () => {
    const res = await request(app).get('/users');

    expect(res.status).toBe(200);
    expect(res.body.length).toBe(0);
  });

  test('should insert a user with success', async () => {
    const res = await request(app).post('/users')
      .send({ name: 'Walter Mitty', mail: 'walter@mail.com', passwd: '123' });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('name', 'Walter Mitty');
  });

  test('shouldn`t insert user without name', async () => {
    const res = await request(app).post('/users')
      .send({ mail: internet.email(), passwd: '123' });

    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Nome é um atributo obrigatório.');
  });

  test('shouldn`t insert user without mail', async () => {
    const res = await request(app).post('/users')
      .send({ name: 'Walter Mitty', passwd: '123' });

    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Email é um atributo obrigatório.');
  });

  test('shouldn`t insert user without passwd', async () => {
    const res = await request(app).post('/users')
      .send({ mail: internet.email(), name: 'Walter Mitty' });

    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Senha é um atributo obrigatório.');
  });

  test('shouldn`t insert an mail already existent', async () => {
    const res = await request(app).post('/users')
      .send({ mail: 'walter@mail.com', name: 'Walter Mitty', passwd: '123' });

    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Já existe um usuário com este email.');
  });
});
