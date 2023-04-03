import { keysToCamel } from "./parsers"

export default async function signUpCall(username, email, password) {
  let user

  try {
    user = await fetch(`/api/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_name: username, password, email }),
    })
    const userData = await user.json()
    return keysToCamel(userData)
  } catch (error) {
    return { error }
  }
}