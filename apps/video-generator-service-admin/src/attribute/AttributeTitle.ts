import { Attribute as TAttribute } from "../api/attribute/Attribute";

export const ATTRIBUTE_TITLE_FIELD = "organizationId";

export const AttributeTitle = (record: TAttribute): string => {
  return record.organizationId?.toString() || String(record.id);
};
