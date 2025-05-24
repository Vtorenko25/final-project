import { IUser } from "../interfaces/user.interface";
import { userRepository } from "../repositories/user.repository";

class UserService {
  public async getAllUsers(query: any): Promise<IUser[]> {
    return await userRepository.getAllUsers(query);
  }
}
export const userService = new UserService();
