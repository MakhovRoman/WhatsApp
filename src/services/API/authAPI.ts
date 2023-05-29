import { request } from "./apiRequest"
import { LoginRequestData } from "./types";

export const authAPI = {
  login: (data: LoginRequestData) => {
    request.get<LoginRequestData>(`/waInstance${data.id}/getSettings/${data.token}`);
  }
}
