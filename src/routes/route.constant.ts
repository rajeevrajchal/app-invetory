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
  system_sub_system: (system_id: string) => `/system/${system_id}/sub-system`,
  system_feature: (system_id: string) => `/system/${system_id}/feature`,

  users: "/users",
  contracts: "/contracts",
  vendors: "/vendors",
  schedule: "/schedule",
  clients: "/clients",
};

export default AppRoute;
