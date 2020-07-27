type TemplateType = 'basic' | 'image' | 'list' | 'progress';

type CreateNotificationOptions = {
  type: TemplateType;
  iconUrl: string;
  title: string;
  message: string;
}
