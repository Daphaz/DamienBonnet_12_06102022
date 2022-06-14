export const formatNumberLocalFr = (
  value: number,
  options?: Intl.NumberFormatOptions | undefined
): string => {
  return new Intl.NumberFormat('fr-FR', options).format(value);
};
