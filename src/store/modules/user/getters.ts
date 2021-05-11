import { IStore } from "@/store";
import { GetterTree } from "vuex";
import { IUserState } from "./state";

export const getters: GetterTree<IUserState, IStore> = {
  name: (state: IUserState) => state.name,
  avatar: (state: IUserState) => state.avatar,
  userInfo: (state: IUserState) => state.userInfo
}