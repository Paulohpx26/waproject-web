import IUser from './user';

export default interface IRequest {
  id?: number;
  userId: number;
  description: string;
  amount: number;
  total: number;
  createdDate?: Date;
  updatedDate?: Date;

  user: IUser;
}
