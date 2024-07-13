import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "organizationId";

export const UserTitle = (record: TUser): string => {
  return record.organizationId?.toString() || String(record.id);
};
