import { Template as TTemplate } from "../api/template/Template";

export const TEMPLATE_TITLE_FIELD = "organizationId";

export const TemplateTitle = (record: TTemplate): string => {
  return record.organizationId?.toString() || String(record.id);
};
