import { login, SignInRequest } from "@/api";
import { ActionTree } from "vuex";
import { IUserState } from "./state";
import { MutationsEnum } from './mutations'
import { setToken } from "@/utils/auth";
import { IStore } from "@/store";

export enum ActionsEnum {
  SIGN_IN = 'SIGN_IN'
}

export const actions: ActionTree<IUserState, IStore> = {
  // 登录
  [ActionsEnum.SIGN_IN]: ({ commit }, userInfo: SignInRequest) => {
    const { password, username } = userInfo
    return new Promise((resolve, reject) => {
      login({username: username.trim(), password: password}).then(res => {
        commit(MutationsEnum.SET_TOKEN, res.data.token)
        setToken(res.data.token)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  }
}