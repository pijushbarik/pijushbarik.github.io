/**
 * Merge class names into a single string. Also filters out invalid class names
 * https://github.com/wojtekmaj/merge-class-names/blob/master/src/index.js
 */
const classNames = (...args: any[]): string => {
  return Array.prototype.slice
    .call(args)
    .reduce(
      (classList: any[], arg: string | any[]) =>
        typeof arg === "string" || Array.isArray(arg)
          ? classList.concat(arg)
          : classList,
      []
    )
    .filter(Boolean)
    .join(" ");
};

export default classNames;
