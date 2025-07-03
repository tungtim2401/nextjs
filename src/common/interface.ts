export interface ContentItem {
  name: string;
  description?: string;
  responsibilities?: string[];
  [key: string]: unknown;
}
