import { PrismaClient, User } from "@prisma/client";
import { RepositoryInterface } from "./repository.interface";

class UserRepository implements RepositoryInterface<User> {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findById(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async  create(data: User): Promise<User> {
    return await this.prisma.user.create({ data });
  }

  async update(id: string, data: Partial<User>): Promise<User> {
    return await this.prisma.user.update({ where: { id }, data });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}
