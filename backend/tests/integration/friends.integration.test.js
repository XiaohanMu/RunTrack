const request = require('supertest');
const app = require('../../src/server');

describe('Friends Integration Tests', () => {
    it('should retrieve a friend list', async () => {
        const response = await request(app)
            .get('/api/friends/list/1'); // Replace 1 with the logged-in user's ID

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('should invite a friend to a run session', async () => {
        const response = await request(app)
            .post('/api/friends/invite')
            .send({ userId: 1, friendId: 2, runSessionId: 3 });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message');
    });
});
