const request = require('supertest');

const app = require('../src/app');

test('should return all users', async () => {
  const res = await request(app).get('/users');

  expect(res.status).toBe(200);
  expect(res.body).toHaveLength(1);
  expect(res.body[0]).toHaveProperty('name', 'John Doe');
});

test('should insert a user with success', async () => {
  const res = await request(app).post('/users')
    .send({ name: 'Walter Mitty', mail: 'walter@mail.com' });

  expect(res.status).toBe(201);
  expect(res.body).toHaveProperty('name', 'Walter Mitty');
});
