export function isString(value: any): value is string {
  return typeof value === 'string';
}
export function upperFirst(value: string): string {
  return value.slice(0, 1).toUpperCase() + value.slice(1);
}
