import { IUser } from "../interfaces/user.interface";
import { User } from "../models/user.model";

class UserRepository {
  public async getAllUsers(query: any): Promise<IUser[]> {
    const skip = query.limit * (query.page - 1);
    return await User.find().limit(query.limit).skip(skip);
  }
}

export const userRepository = new UserRepository();
