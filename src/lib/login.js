async function loginCall(username, password) {
  let user

  try {
    user = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_name: username, password: password }),
    })
    const userData = await user.json()
    console.log(userData)
    return userData
  } catch (error) {
    return { error }
  }
}

export { loginCall }