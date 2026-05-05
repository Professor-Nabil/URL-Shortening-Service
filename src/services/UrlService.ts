import { prisma } from '../utils/prisma';

export class UrlService {
  async create(url: string) {
    const shortCode = Math.random().toString(36).substring(2, 8);
    return await prisma.shortURL.create({
      data: { url, shortCode },
    });
  }

  async findByShortCode(shortCode: string) {
    return await prisma.shortURL.findUnique({
      where: { shortCode },
    });
  }

  async update(shortCode: string, url: string) {
    return await prisma.shortURL.update({
      where: { shortCode },
      data: { url },
    });
  }

  async delete(shortCode: string) {
    return await prisma.shortURL.delete({
      where: { shortCode },
    });
  }

  async getStats(shortCode: string) {
    return await prisma.shortURL.findUnique({
      where: { shortCode },
      select: {
        id: true,
        url: true,
        shortCode: true,
        createdAt: true,
        updatedAt: true,
        accessCount: true,
      },
    });
  }
}
