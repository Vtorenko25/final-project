class AuthService {
  public async signIn(dto: any): Promise<any> {
    const password = dto;
    console.log(password);

    // Заглушка: повертаємо фіктивний токен
    return { token: "mocked-token" };
  }
}

export const authService = new AuthService();
