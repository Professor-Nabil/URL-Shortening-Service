import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import { app } from '../../src/app';
import { prisma } from '../../src/utils/prisma';

describe('Url API Integration', () => {
  beforeAll(async () => {
    await prisma.shortURL.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('POST /shorten - should create a new short URL', async () => {
    const res = await request(app)
      .post('/shorten')
      .send({ url: 'https://example.com' });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('shortCode');
  });

  it('GET /shorten/:shortCode - should retrieve original URL', async () => {
    const created = await prisma.shortURL.create({
      data: { url: 'https://test.com', shortCode: 'test12' },
    });
    const res = await request(app).get(`/shorten/${created.shortCode}`);
    expect(res.status).toBe(200);
    expect(res.body.url).toBe('https://test.com');
  });

  it('PUT /shorten/:shortCode - should update URL', async () => {
    const created = await prisma.shortURL.create({
      data: { url: 'https://old.com', shortCode: 'upd123' },
    });
    const res = await request(app)
      .put(`/shorten/${created.shortCode}`)
      .send({ url: 'https://new.com' });
    expect(res.status).toBe(200);
    expect(res.body.url).toBe('https://new.com');
  });

  it('DELETE /shorten/:shortCode - should delete URL', async () => {
    const created = await prisma.shortURL.create({
      data: { url: 'https://del.com', shortCode: 'del123' },
    });
    const res = await request(app).delete(`/shorten/${created.shortCode}`);
    expect(res.status).toBe(204);
  });

  it('GET /shorten/:shortCode/stats - should get stats', async () => {
    const created = await prisma.shortURL.create({
      data: { url: 'https://stats.com', shortCode: 'stt123' },
    });
    const res = await request(app).get(`/shorten/${created.shortCode}/stats`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('accessCount');
  });
});
