/* eslint-disable import/prefer-default-export */
const isTextValid = (text) => {
  if (text) return true
  return false
}

const areTextFieldsValidated = (values) => {
  let valid = true
  values.forEach((value) => {
    if (!isTextValid(value)) {
      valid = false
    }
  })
  return valid
}

export { areTextFieldsValidated }