export const className = (cls: string, additional: string[] = []): string => {
  return [cls, ...additional].join(" ");
};
