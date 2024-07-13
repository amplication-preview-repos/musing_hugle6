import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AttributeWhereInput = {
  id?: StringFilter;
  organizationId?: StringNullableFilter;
};
