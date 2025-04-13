import jwt, { Secret, SignOptions } from "jsonwebtoken";

import { config } from "../configs/config";
import { ITokenPair, ITokenPayload } from "../interfaces/token.interface";

class TokenService {
  public genereteTokens(payload: ITokenPayload): ITokenPair {
    const accessToken = jwt.sign(payload, config.jwtAccessSecret as Secret, {
      expiresIn: config.jwtAccessExpiresIn as SignOptions["expiresIn"],
    });
    const refreshToken = jwt.sign(payload, config.jwtRefreshSecret as Secret, {
      expiresIn: config.jwtRefreshExpiresIn as SignOptions["expiresIn"],
    });
    return { accessToken, refreshToken };
  }
}

export const tokenService = new TokenService();
