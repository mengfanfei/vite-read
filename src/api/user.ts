import request from '@/utils/request'
export interface GetInfoResponse {
  uid?: string
  username?: string
  nickname?: string
  avatar?: string
}

export interface SignInRequest {
  username: string,
  password: string
}

export interface SignInResponse {
  token: string
}

/**
 * 登录
 * @param data 登录请求参数
 */
export function login(data: SignInRequest) {
  return request<SignInResponse>({
    url: '/user/login',
    method: 'POST',
    data
  })
}