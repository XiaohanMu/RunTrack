const request = require('supertest');
const app = require('../../src/server');

describe('User Unit Tests', () => {
    it('should create a new user', async () => {
        const response = await request(app)
            .post('/auth/register')
            .send({
                username: 'testuser',
                password: 'password123',
                role: 'user'
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('token');
    });
});
