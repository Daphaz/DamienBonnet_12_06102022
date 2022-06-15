//#region  //*=========== Format ===========
export const formatNumberLocalFr = (
  value: number,
  options?: Intl.NumberFormatOptions | undefined
): string => {
  return new Intl.NumberFormat('fr-FR', options).format(value);
};

export const formatError = (
  error: unknown
): { message: string; name?: string } => {
  try {
    if (error instanceof Error) {
      return { message: error.message, name: error.name };
    }
    return { message: String(error) };
  } catch (error) {
    return { message: 'An unknown error ocurred.' };
  }
};
//#endregion  //*======== Format ===========
