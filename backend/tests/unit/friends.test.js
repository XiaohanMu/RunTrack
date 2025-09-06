const request = require('supertest');
const app = require('../../src/server');

describe('Friends Unit Tests', () => {
    it('should add a friend', async () => {
        const response = await request(app)
            .post('/api/friends/add')
            .send({ userId: 1, friendId: 2 });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
    });
});
