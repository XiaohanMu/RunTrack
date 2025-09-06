const request = require('supertest');
const app = require('../../src/server');

describe('Auth Integration Tests', () => {
    it('should register and login a user', async () => {
        const registerResponse = await request(app)
            .post('/auth/register')
            .send({
                username: 'integrationUser',
                password: 'password123',
                role: 'user'
            });

        expect(registerResponse.status).toBe(201);
        expect(registerResponse.body).toHaveProperty('token');

        const loginResponse = await request(app)
            .post('/auth/login')
            .send({
                username: 'integrationUser',
                password: 'password123'
            });

        expect(loginResponse.status).toBe(200);
        expect(loginResponse.body).toHaveProperty('token');
    });
});
