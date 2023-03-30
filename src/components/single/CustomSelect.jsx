import { 
  FormControl, 
  FormLabel, 
  FormHelperText, 
  FormErrorMessage,
  Select
} from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';


export default function CustomSelect({ 
  disabled,
  error, 
  errorMessage,
  helperText,
  name, 
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
  );
};

CustomSelect.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  helperText: PropTypes.string,
  name: PropTypes.string,
  selectOptions: PropTypes.arrayOf(PropTypes.string),
  setSelectValue: PropTypes.func,
};

CustomSelect.defaultProps ={
  disabled: false,
  error: false,
  errorMessage: 'issue with field',
  helperText: '',
  name: '',
  selectOptions: [],
  setSelectValue: () => {},
};
