import { IStore } from "."

const getters = {
  name: (state: IStore) => state.user.name 
}

export default getters