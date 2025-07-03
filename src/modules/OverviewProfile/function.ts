export const renderString = (value: unknown): string => {
  return typeof value === "string" ? value : "";
};
