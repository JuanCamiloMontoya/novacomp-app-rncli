import axios from "axios";

export const mockAxiosGet = (
  url: string,
  responseData: any,
  error?: string,
) => {
  if (error) {
    jest.spyOn(axios, "get").mockRejectedValueOnce(error);
  } else {
    jest.spyOn(axios, "get").mockResolvedValueOnce({ data: responseData });
  }
};
