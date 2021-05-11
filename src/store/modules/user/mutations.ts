import { GetInfoResponse } from "@/api"
import { MutationTree } from "vuex"
import { IUserState } from "./state"

export enum MutationsEnum {
  SET_TOKEN = 'SET_TOKEN',
  SET_AVATAR = 'SET_AVATAR',
  SET_NAME = 'SET_NAME',
  SET_USERINFO = 'SET_USERINFO'
}

export const mutations: MutationTree<IUserState> = {
  [MutationsEnum.SET_TOKEN]: (state: IUserState, token:string) => {
    state.token = token
  },
  [MutationsEnum.SET_AVATAR]: (state: IUserState, avatar: string) => {
    state.avatar = avatar
  },
  [MutationsEnum.SET_NAME]: (state: IUserState, name: string) => {
    state.name = name
  },
  [MutationsEnum.SET_USERINFO]: (state: IUserState, userInfo: GetInfoResponse) => {
    state.userInfo = userInfo
  }
}