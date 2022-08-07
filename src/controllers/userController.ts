import type { DriverRepository, TruckRepository } from '../repos';

import { compare } from '../helpers/password';
import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';

export default class UserController {
  driverRepository: DriverRepository;
  truckRepository: TruckRepository;
  secret: string;

  constructor(
    driverRepository: DriverRepository,
    truckRepository: TruckRepository,
    serverParams: any
  ) {
    this.driverRepository = driverRepository;
    this.truckRepository = truckRepository;

    this.secret = serverParams.secret;
  }

  async login(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.sendStatus(400);
    }

    const user = await this.driverRepository.findByUsername(username);

    if (!user) {
      return res.sendStatus(404);
    }

    const match = compare(password, user.password);

    if (!match) {
      return res.sendStatus(403);
    }

    const token = sign(
      {
        document: user.document,
        name: user.name,
        id: user.id,
      },
      this.secret,
      {
        expiresIn: '1h',
      }
    );

    return res.status(200).json({
      user: { document: user.document, name: user.name },
      trucks: user.trucks,
      token,
    });
  }
}
