import { FormLabel, Input, FormHelperText, FormControl, FormErrorMessage } from '@chakra-ui/react'
import React from 'react'
import PropTypes from 'prop-types'

export default function TextInput({ 
  name, 
  inputValue, 
  setInputValue, 
  disabled,
  helperText,
  error,
  errorMessage
}) {
  return (
    <FormControl isInvalid={error}>
      <FormLabel>{name}</FormLabel>
      <Input 
        isDisabled={disabled} 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}
      />
      {(!error && helperText) && <FormHelperText>{helperText}</FormHelperText>}
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}

TextInput.propTypes = {
  name: PropTypes.string,
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  errorMessage: PropTypes.string,
}

TextInput.defaultProps ={
  name: '',
  inputValue: '',
  setInputValue: () => console.log('hook not set'),
  disabled: false,
  error: false,
  helperText: '',
  errorMessage: `issue with field`
}
