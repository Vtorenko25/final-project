import { ADMIN_EMAIL, ADMIN_PASSWORD } from "../constants/constants";
import { ApiError } from "../errors/api.error";
import { ILogin } from "../interfaces/login.interface";
import { tokenService } from "./token.service";

class AuthService {
  public async signIn(dto: ILogin): Promise<any> {
    const user = await dto;

    // if (email !== config.adminEmail) {
    //   console.log("DTO email:", email);
    //   console.log("ENV email:", config.adminEmail);
    //   throw new ApiError("Невірний email або пароль", 401);
    // }
    // if (password !== ADMIN_PASSWORD) {
    //   console.log("DTO password:", password);
    //   console.log("ENV password:", config.adminPassword);
    //   throw new ApiError("Невірний email або пароль", 401);
    // }
    if (user.email !== ADMIN_EMAIL) {
      throw new ApiError("Невірний email або пароль", 401);
    }
    if (user.password !== ADMIN_PASSWORD) {
      throw new ApiError("Невірний email або пароль", 401);
    }
    const tokenPayload = {
      email: user.email,
      role: user.role,
      userId: user.userId,
    };
    const tokens = await tokenService.genereteTokens(tokenPayload);
    console.log(tokens);
    return {
      tokens,
    };
  }
}

export const authService = new AuthService();
