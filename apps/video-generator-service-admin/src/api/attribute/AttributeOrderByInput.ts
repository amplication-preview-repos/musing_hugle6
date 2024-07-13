import { SortOrder } from "../../util/SortOrder";

export type AttributeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  organizationId?: SortOrder;
};
