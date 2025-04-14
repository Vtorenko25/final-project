import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 3001,

  mongoUrl: process.env.MONGODB_URI || "mongodb://localhost:27017/yourdb",

  adminEmail: process.env.ADMIN_EMAIL,
  adminPassword: process.env.ADMIN_PASSWORD,

  jwtAccessSecret: process.env.JWT_ACCESS_SECRET,
  jwtAccessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
  jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
};
