import { User } from "./User";

export interface RegisterResponse {
  token: string;
  user: User;
  valid: boolean;
}