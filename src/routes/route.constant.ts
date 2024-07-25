const AppRoute = {
  home: "/",
  login: "/login",
  forget_password: "/forget-password",
  reset_password: "/reset-password",
  profile: "/my-account",

  instance: "/instance",
  create_instance: "/instance/create",
  instance_detail: (instance_id: string) => `/instance/${instance_id}`,
  instance_edit: (instance_id: string) => `/instance/${instance_id}/edit`,
  instance_sub_instance: (instance_id: string) =>
    `/instance/${instance_id}/instances`,
  instance_feature: (instance_id: string) => `/instance/${instance_id}/feature`,
  create_sub_instance: (instance_id: string) =>
    `/instance/${instance_id}/instances/create`,
  create_instance_feature: (instance_id: string) =>
    `/instance/${instance_id}/feature/create`,

  // customers
  customer: "/customer",

  users: "/users",
  contracts: "/contracts",
  vendors: "/vendors",
  schedule: "/schedule",
  work_logs: "/work-logs",
  team: "/teams",

  document: "/document",
};

export default AppRoute;
