import { GetInfoResponse } from "@/api";
import { getToken } from "@/utils/auth";

export interface IUserState {
  token: string | undefined,
  name: string,
  avatar: string,
  userInfo: GetInfoResponse
}

export const state: IUserState = {
  token: getToken(),
  name: '',
  avatar: '',
  userInfo: {}
}