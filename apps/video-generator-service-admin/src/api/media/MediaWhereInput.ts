import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MediaWhereInput = {
  id?: StringFilter;
  organizationId?: StringNullableFilter;
};
