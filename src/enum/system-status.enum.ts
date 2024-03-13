export enum SYSTEM_STATUS {
  DRAFT = "draft",
  ON_HOLD = "on_hold",
  SUSPEND = "suspend",
  ACTIVE = "active",
}

export const SYSTEM_STATUS_COLOR: Record<string, string> = {
  [SYSTEM_STATUS.DRAFT]: "#4169E1",
  [SYSTEM_STATUS.ACTIVE]: "#008080",
  [SYSTEM_STATUS.ON_HOLD]: "#A020F0",
  [SYSTEM_STATUS.SUSPEND]: "#555555",
};

export const SYSTEM_STATUS_NAME: Record<string, string> = {
  [SYSTEM_STATUS.DRAFT]: "draft",
  [SYSTEM_STATUS.ON_HOLD]: "on hold",
  [SYSTEM_STATUS.SUSPEND]: "suspend",
  [SYSTEM_STATUS.ACTIVE]: "active",
};
