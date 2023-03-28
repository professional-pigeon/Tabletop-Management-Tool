import { Select, InputGroup, FormControl, FormLabel, FormHelperText, FormErrorMessage } from '@chakra-ui/react'
import PropTypes from 'prop-types'


export default function PlaceSelect({ 
  error, 
  name, 
  disabled,
  helperText,
  errorMessage,
  selectOptions, 
  selectValue, 
  setSelectValue }) {
    
  return (
    <FormControl isInvalid={false}>
      <FormLabel>{name}</FormLabel>
      <Select
        isDisabled={disabled} 
        placeholder={'select option'}
        onChange={(e) => setSelectValue(JSON.parse(e.target.value))}
      >
        {selectOptions.map((opt) => 
          <option value={JSON.stringify(opt)} key={`${opt.name} ${opt.id}`}>{opt.name}</option>)}
      </Select>
      {(!error && helperText) && <FormHelperText>{helperText}</FormHelperText>}
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}

PlaceSelect.propTypes = {
  name: PropTypes.string,
  selectValue: PropTypes.string,
  setSelectValue: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  errorMessage: PropTypes.string,
}

PlaceSelect.defaultProps ={
  name: '',
  selectValue: '',
  setSelectValue: () => console.log('hook not set'),
  disabled: false,
  error: false,
  helperText: '',
  errorMessage: `issue with field`
}
