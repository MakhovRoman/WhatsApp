import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export class ApiError extends Error {
  constructor(public message: string, public status: number) {
    super(message);

    this.name = this.constructor.name;
    this.status = status;
  }
}

const axiosInstance = axios.create({
  baseURL: __API_ENDPOINT__
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if(axios.isAxiosError(error)) {
      if (error.response) {
        return Promise.reject(new ApiError(error.response.data.reason, error.response.status));
      }
    }

    return Promise.reject(error);
  }
)

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
