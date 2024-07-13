import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type JobWhereInput = {
  id?: StringFilter;
  organizationId?: StringNullableFilter;
};
