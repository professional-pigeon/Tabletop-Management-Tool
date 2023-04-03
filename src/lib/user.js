import { keysToCamel } from "./parsers"

export default async function signUpCall(username, email, password) {
  let user

  try {
    user = await fetch(`/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_name: username, password, email }),
    })
    const userData = await user

    if (userData?.ok) {
      return keysToCamel(userData.json())
    } 
      return { error: `There was an HTTP request error ${userData?.status}`}
  } catch (error) {
    if (error instanceof SyntaxError) {
      return { error: `There was a Syntaxerror`  }
    }
    return { error: 'There was an error in the response'}
  }
}