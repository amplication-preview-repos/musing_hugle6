import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TemplateWhereInput = {
  id?: StringFilter;
  organizationId?: StringNullableFilter;
};
