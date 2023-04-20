import { User } from "./User";

export interface LoginResponse {
  Token: string;
  user: User;
  valid: boolean;
}