export type authType = {
  user: null | userType
  access_token: null | string
}

export type userType = {
  id: number
  email: string
  phone: number
  avatar: string
}
