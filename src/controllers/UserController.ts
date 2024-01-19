import { Request, Response } from 'express';
import { User } from '../models/User';
import { IUser } from '../interfaces/IUser';
import { UserService } from '../services/UserService';

export class UserController {
  public async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, birthday }: IUser = req.body;
      const newUser = await User.create({ name, email, birthday });
      res.status(201).json(newUser);
     } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Ocorreu um erro desconhecido' });
      }
    }
  }

  public async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const formattedUsers = await UserService.getAllFormattedUsers();
      res.status(200).json(formattedUsers);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Ocorreu um erro desconhecido' });
      }
    }
  }
}