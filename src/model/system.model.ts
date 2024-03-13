import { USER } from "./user.model";

export interface SYSTEM {
  id: string;
  name: string;
  domain: string;
  location: string;
  description: string;
  repository: string;
  branch: string;
  status: string;
  user: Partial<USER>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  isParent: boolean;
  subSystems: SYSTEM[];
}
