import { Media as TMedia } from "../api/media/Media";

export const MEDIA_TITLE_FIELD = "organizationId";

export const MediaTitle = (record: TMedia): string => {
  return record.organizationId?.toString() || String(record.id);
};
