type TemplateType = 'basic' | 'image' | 'list' | 'progress';

type CreateNotificationOptions = {
  type: TemplateType;
  iconUrl: string;
  title: string;
  message: string;
}

/* eslint-disable camelcase */
type Tbs = {
  cdr?: string,
  cd_min?: string,
  cd_max?: string,
}
