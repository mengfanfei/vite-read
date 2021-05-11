import { get,set, remove } from 'js-cookie'
const tokenKey = 'myappToken'

export function getToken() {
  return get(tokenKey)
}

export function setToken(token: string) {
  return set(tokenKey, token, { expires: 15 })
}

export function removeToken() {
  return remove(tokenKey)
}