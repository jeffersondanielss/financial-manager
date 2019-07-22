const request = require('supertest');

const app = require('../../src/app');

describe('auth', () => {
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
    test('should generate a token', async () => {
      const res = await request(app).post('/auth/signin')
        .send({ mail: 'madara@mail.com', passwd: '123' });

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('token');
    });
  });
});
