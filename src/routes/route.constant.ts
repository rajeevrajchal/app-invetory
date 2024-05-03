const AppRoute = {
  home: "/",
  login: "/login",
  forget_password: "/forget-password",
  reset_password: "/reset-password",
  profile: "/my-account",

  app: "/app",
  create_app: "/app/create",
  app_detail: (app_id: string) => `/app/${app_id}`,
  app_edit: (app_id: string) => `/app/${app_id}/edit`,
  app_sub_app: (app_id: string) => `/app/${app_id}/instances`,
  app_feature: (app_id: string) => `/app/${app_id}/feature`,
  create_sub_app: (app_id: string) => `/app/${app_id}/instances/create`,
  create_app_feature: (app_id: string) => `/app/${app_id}/feature/create`,

  // customers
  customer: "/customer",

  users: "/users",
  contracts: "/contracts",
  vendors: "/vendors",
  schedule: "/schedule",
  work_logs: "/work-logs",
  team: "/teams",
};

export default AppRoute;
