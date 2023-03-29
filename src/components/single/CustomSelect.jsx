import { Select, FormControl, FormLabel, FormHelperText, FormErrorMessage } from '@chakra-ui/react'
import React from 'react'
import PropTypes from 'prop-types'


export default function CustomSelect({ 
  error, 
  name, 
  disabled,
  helperText,
  errorMessage,
  selectOptions, 
  setSelectValue 
}) {
    
  return (
    <FormControl isInvalid={false}>
      <FormLabel>{name}</FormLabel>
      <Select
        isDisabled={disabled} 
        placeholder='select option'
        onChange={(e) => setSelectValue(e.target.value)}
      >
        {selectOptions.map((opt) => 
          <option value={opt} key={`${opt}`}>{opt}</option>)}
      </Select>
      {(!error && helperText) && <FormHelperText>{helperText}</FormHelperText>}
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}

CustomSelect.propTypes = {
  name: PropTypes.string,
  selectOptions: PropTypes.arrayOf(PropTypes.string),
  setSelectValue: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  errorMessage: PropTypes.string,
}

CustomSelect.defaultProps ={
  name: '',
  selectOptions: [],
  setSelectValue: () => {},
  disabled: false,
  error: false,
  helperText: '',
  errorMessage: `issue with field`
}
