/* eslint-disable @typescript-eslint/no-explicit-any */
export function getObjectStringName(value: any) {
  return Object.prototype.toString.call(value)
}

function setLocalStorage(key: string, value: any) {
  const name = getObjectStringName(value)

  if (name === '[object String]') localStorage.setItem(key, value)
  else localStorage.setItem(key, JSON.stringify(value))
}

export function getStringLocalStorage(key: string) {
  return localStorage.getItem(key)
}

export function getJsonLocalStorage(key: string) {
  return JSON.parse(localStorage.getItem(key) || '{}')
}

export function getArrJsonLocalStorage(key: string) {
  return JSON.parse(localStorage.getItem(key) || '[]')
}

// ===== ACCESS_TOKEN =====
const ACCESS_TOKEN_KEY = 'accessToken'
export function saveAccessToken(accessToken: string) {
  setLocalStorage(ACCESS_TOKEN_KEY, accessToken)
}
export function readAccessToken() {
  return getStringLocalStorage(ACCESS_TOKEN_KEY)
}

// current menu key
const MENU_OPEN_KEY = 'menuOpenKeys'
export function saveMenuOpenKeys(openKeys: any) {
  setLocalStorage(MENU_OPEN_KEY, openKeys)
}
export function readMenuOpenKeys() {
  return getArrJsonLocalStorage(MENU_OPEN_KEY)
}
