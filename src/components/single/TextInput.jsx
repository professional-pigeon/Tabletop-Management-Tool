import { Text, Input, Flex } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export default function TextInput({ 
  name, 
  inputValue, 
  setInputValue, 
  disabled
}) {
  return (
    <Flex w='100%' direction='column'>
      <Text>{name}</Text>
      <Input value={inputValue} isDisabled={disabled} onChange={(e) => setInputValue(e.target.value)}/>
    </Flex>
  )
}

TextInput.propTypes = {
  name: PropTypes.string,
  inputValue: PropTypes.string,
  setInputValue: PropTypes.string,
  disabled: PropTypes.bool
}

TextInput.defaultProps ={
  name: '',
  inputValue: '',
  setInputValue: () => console.log('hook not set'),
  disabled: false
}
