import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest';
import { UrlService } from '../../src/services/UrlService';
import { prisma } from '../../src/utils/prisma';

vi.mock('../../src/utils/prisma', () => ({
  prisma: {
    shortURL: {
      create: vi.fn(),
      findUnique: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
  },
}));

describe('UrlService', () => {
  const urlService = new UrlService();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should create a short URL', async () => {
    const mockData = { id: '1', url: 'http://test.com', shortCode: 'abc123', createdAt: new Date(), updatedAt: new Date() };
    (prisma.shortURL.create as Mock).mockResolvedValue(mockData);

    const result = await urlService.create('http://test.com');
    expect(result).toEqual(mockData);
  });
});
