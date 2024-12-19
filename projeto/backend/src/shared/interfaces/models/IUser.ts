import { Document } from "mongoose";

export interface IUser {
  email: string;
  password: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

export interface IUserDocument extends IUser, Document {
  _id: string;
}
