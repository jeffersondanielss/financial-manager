const request = require('supertest');

const app = require('../../src/app');

const MAIN_ROUTE = '/accounts';

describe('accounts', () => {
  beforeAll(async (done) => {
    await app.db.migrate.rollback();
    await app.db.migrate.latest();
    await app.db.seed.run();
    done();
  });

  afterAll(async (done) => {
    await app.db.migrate.rollback();
    done();
  });

  describe('POST', () => {
    test('should insert one account with success', async () => {
      const res = await request(app).post(MAIN_ROUTE)
        .send({ name: 'Acc #1', user_id: 1 });

      expect(res.status).toBe(200);
      expect(res.body.name).toBe('Acc #1');
    });
  });

  describe('GET', () => {
    test('should list all accounts', async () => {
      const res = await request(app).get(MAIN_ROUTE);

      expect(res.status).toBe(200);
      expect(res.body).toHaveLength(1);
    });

    test('should return one account by id', async () => {
      const res = await request(app).get(`${MAIN_ROUTE}/1`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('name', 'Acc #1');
    });
  });

  describe('PUT', () => {
    test('should edit an account', async () => {
      const res = await request(app).put(`${MAIN_ROUTE}/1`)
        .send({ name: 'Acc #X' });

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('name', 'Acc #X');
    });
  });

  describe('DELETE', () => {
    test('should remove an account', async () => {
      const res = await request(app).delete(`${MAIN_ROUTE}/1`);

      expect(res.status).toBe(204);
    });
  });
});
