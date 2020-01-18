// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('supertest');
const app = require('./app');

describe('Server', () => {
  describe('GET /', () => {
    test('It should respond with 200', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toBe(200);
    });
  });
});
