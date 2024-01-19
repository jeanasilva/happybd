import { User } from '../models/User';
import moment from 'moment-timezone';

export class UserService {
  public static async getAllFormattedUsers(): Promise<any[]> {
    const users = await User.findAll();
    return users.map((user) => ({
      ...user.toJSON(),
      birthday: user.birthday ? moment(user.birthday).tz('America/Manaus').format('DD/MM/YYYY') : null,
      createdAt: moment(user.createdAt).tz('America/Manaus').format('DD/MM/YYYY HH:mm:ss'),
      updatedAt: moment(user.updatedAt).tz('America/Manaus').format('DD/MM/YYYY HH:mm:ss'),
    }));
  }
}
