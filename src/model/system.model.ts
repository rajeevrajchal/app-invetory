import { SYSTEM_STATUS } from "@/enum/system-status.enum";
import { USER } from "./user.model";

export interface SYSTEM {
  id: string;
  name: string;
  domain: string;
  location: string;
  description: string;
  repository: string;
  branch: string;
  status: SYSTEM_STATUS;
  user: Partial<USER>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  isParent: boolean;
  subSystems: SYSTEM[];
}
