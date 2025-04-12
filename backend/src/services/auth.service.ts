import { ADMIN_EMAIL, ADMIN_PASSWORD } from "../constants/constants";
import { ApiError } from "../errors/api.error";

class AuthService {
  public async signIn(dto: { email: string; password: string }): Promise<any> {
    const { email, password } = dto;

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
    if (email !== ADMIN_EMAIL) {
      throw new ApiError("Невірний email або пароль", 401);
    }
    if (password !== ADMIN_PASSWORD) {
      throw new ApiError("Невірний email або пароль", 401);
    }
    console.log(email, password);
    return { password, email };
  }

  //   const token = jwt.sign(
  //       { email, role: "admin" },
  //       config.jwtAccessSecret as string,
  //       { expiresIn: config.jwtAccessExpiresIn }
  //   );
  //
  //   return { token };
  // }
}

export const authService = new AuthService();
