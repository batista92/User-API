import { inject, injectable } from "inversify";
import UserRepository from "../repositories/user.repository";
import { TYPES } from "../types";
import { User } from "@prisma/client";

@injectable()
class UserService {
  private userRepository: UserRepository;

  constructor(
    @inject(TYPES.UserRepository) userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async getUserById(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async createUser(data: User): Promise<User> {
    return this.userRepository.create(data);
  }

  async updateUser(id: string, data: Partial<User>): Promise<User> {
    return this.userRepository.update(id, data);
  }

  async deleteUser(id: string): Promise<void> {
    return this.userRepository.delete(id);
  }
}

export default UserService;
