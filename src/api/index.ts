import { AxiosError } from 'axios';

export const getErrorMessage = (error: Error | unknown) => {
  if (error instanceof AxiosError) {
    return error.response?.data.message;
  }
  return error;
};
