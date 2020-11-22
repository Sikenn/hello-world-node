const request = require('supertest');
const app = require('./app');

describe('Get /', () => {
    it('should have status code 2000', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
    });
    it('should return hello world', async () => {
        const res = await request(app).get('/');
        expect(res.body).toEqual('Hello World!');
    });
})

afterAll(async () => {
    await app.close();
})