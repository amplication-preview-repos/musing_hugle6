import { Job as TJob } from "../api/job/Job";

export const JOB_TITLE_FIELD = "organizationId";

export const JobTitle = (record: TJob): string => {
  return record.organizationId?.toString() || String(record.id);
};
