import type { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export default class TokenMiddleware {
  constructor(private disableToken: boolean = false, private secret: string) {}

  validateRequest(
    request: Request,
    response: Response,
    next: NextFunction
  ): Response | any {
    if (this.disableToken) {
      return next();
    }

    const token =
      request.header("Authorization") || request.header("authorization");

    if (!token) {
      return response.sendStatus(401);
    }

    try {
      const decoded = verify(token, this.secret);

      if (!decoded) {
        return response.sendStatus(400);
      }

      return next();
    } catch (error) {
      return response.sendStatus(403);
    }
  }
}
