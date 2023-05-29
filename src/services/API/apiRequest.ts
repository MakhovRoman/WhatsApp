import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: __API_ENDPOINT__
})

export const request = {
  get: async <T>(url: string, config?: AxiosRequestConfig) => {
    const result = await axiosInstance.get<T, AxiosRequestConfig<T>>(url, config);
    console.log(result)
    return result;
  },

  post: async <T, D>(url: string, data?:D, config?: AxiosRequestConfig<D>) => {
    const result = await axiosInstance.post<T, AxiosResponse<T>, D>(url, data, config);

    return result;
  }
}
