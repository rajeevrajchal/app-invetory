const AppRoute = {
  home: "/",
  login: "/login",
  forget_password: "/forget-password",
  reset_password: "/reset-password",
  profile: "/my-account",

  system: "/system",
  create_system: "/system/create",
  system_detail: (system_id: string) => `/system/${system_id}`,
  system_edit: (system_id: string) => `/system/${system_id}/edit`,

  users: "/users",
  contracts: "/contracts",
  vendors: "/vendors",
  schedule: "/schedule",
  clients: "/clients",
};

export default AppRoute;
