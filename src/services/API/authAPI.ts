import { request } from "./apiRequest"
import { LoginRequestData } from "./types";

export const authAPI = {
  login: async (data: LoginRequestData) => {
    await request.get<LoginRequestData>(`/waInstance${data.idInstance}/getSettings/${data.apiTokenInstance}`);
  }
}
