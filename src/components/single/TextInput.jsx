import { FormLabel, Input, Flex, FormHelperText, FormControl } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export default function TextInput({ 
  name, 
  inputValue, 
  setInputValue, 
  disabled,
  helperText,
  error
}) {
  return (
    <FormControl>
      <FormLabel>{name}</FormLabel>
      <Input 
        isInvalid={error}
        isDisabled={disabled} 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

TextInput.propTypes = {
  name: PropTypes.string,
  inputValue: PropTypes.string,
  setInputValue: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string
}

TextInput.defaultProps ={
  name: '',
  inputValue: '',
  setInputValue: () => console.log('hook not set'),
  disabled: false,
  error: false,
  helperText: '',
}
