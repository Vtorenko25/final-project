import { NextFunction, Request, Response } from "express";

import { userService } from "../services/user.service";

class UserController {
  public async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query;
      const result = await userService.getAllUsers(query);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }
}
export const userController = new UserController();
