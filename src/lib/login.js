async function loginCall(username, password) {
  let user

  try {
    user = await fetch(`/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_name: username, password: password }),
    })
    const userData = await user.json()
    return userData
  } catch (error) {
    return { error }
  }
}

async function logoutCall() {
  let res
  try {
    res = await fetch(`/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const response = await res.json()
    return response
  } catch (error) {
    return { error }
  }
}

export { loginCall, logoutCall }