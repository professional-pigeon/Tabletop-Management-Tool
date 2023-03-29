import { keysToCamel } from "./parsers"

async function loginCall(username, password) {
  let user

  try {
    user = await fetch(`/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_name: username, password }),
    })
    const userData = await user.json()
    return keysToCamel(userData)
  } catch (error) {
    return { error }
  }
}

async function logoutCall() {
  let res
  try {
    res = await fetch(`/api/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const response = await res.json()
    return keysToCamel(response)
  } catch (error) {
    return { error }
  }
}

export { loginCall, logoutCall }