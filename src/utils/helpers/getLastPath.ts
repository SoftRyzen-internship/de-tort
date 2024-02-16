export function getLastPath(inputString: string): string {
  const parts = inputString.split("/");
  return parts[parts.length - 1];
}
