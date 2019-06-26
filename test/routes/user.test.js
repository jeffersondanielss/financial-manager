const request = require('supertest');
const { internet } = require('faker');

const app = require('../../src/app');

test('should return all users', async () => {
  const res = await request(app).get('/users');

  expect(res.status).toBe(200);
  expect(res.body.length).toBeGreaterThan(0);
});

test('should insert a user with success', async () => {
  const res = await request(app).post('/users')
    .send({ name: 'Walter Mitty', mail: internet.email(), passwd: '123' });

  expect(res.status).toBe(201);
  expect(res.body).toHaveProperty('name', 'Walter Mitty');
});

test('shouldn`t insert user without name', async () => {
  const res = await request(app).post('/users')
    .send({ mail: internet.email(), passwd: '123' });

  expect(res.status).toBe(400);
  expect(res.body.error).toBe('Nome é um atributo obrigatório.');
});
