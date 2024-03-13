export type USER = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  isActive: boolean;
  otp: string;
  otp_expiry: Date;
  auth_provider: string;
  auth_provider_id: string;

  refresh_token: any;
  reset_token: any;

  is_temp: boolean;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
};
