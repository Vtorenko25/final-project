import { RoleEnum } from "../enums/role.enum";

export interface IUser {
  name: string;
  surname: string;
  email: string;
  phone: string;
  age: number;
  role: RoleEnum;
  course: string;
  course_format: string;
  course_type: string;
  sum?: number;
  already_paid?: number;
  created_at: string;
  utm: string;
  msg?: string;
  status?: string;
}
