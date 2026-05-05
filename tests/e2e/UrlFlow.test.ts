import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import { app } from '../../src/app';
import { prisma } from '../../src/utils/prisma';

describe('Url E2E Flow', () => {
  beforeAll(async () => {
    await prisma.shortURL.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('should create, retrieve, update, and delete a URL', async () => {
    // 1. Create
    const createRes = await request(app)
      .post('/shorten')
      .send({ url: 'https://e2e-test.com' });
    expect(createRes.status).toBe(201);
    const shortCode = createRes.body.shortCode;

    // 2. Retrieve
    const getRes = await request(app).get(`/shorten/${shortCode}`);
    expect(getRes.status).toBe(200);
    expect(getRes.body.url).toBe('https://e2e-test.com');

    // 3. Update
    const updateRes = await request(app)
      .put(`/shorten/${shortCode}`)
      .send({ url: 'https://e2e-updated.com' });
    expect(updateRes.status).toBe(200);
    expect(updateRes.body.url).toBe('https://e2e-updated.com');

    // 4. Stats
    const statsRes = await request(app).get(`/shorten/${shortCode}/stats`);
    expect(statsRes.status).toBe(200);
    expect(statsRes.body.url).toBe('https://e2e-updated.com');

    // 5. Delete
    const deleteRes = await request(app).delete(`/shorten/${shortCode}`);
    expect(deleteRes.status).toBe(204);

    // Verify deletion
    const verifyRes = await request(app).get(`/shorten/${shortCode}`);
    expect(verifyRes.status).toBe(404);
  });
});
