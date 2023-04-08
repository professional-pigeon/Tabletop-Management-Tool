/* eslint-disable react/forbid-prop-types */
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
  valueRef
}) {
    
  return (
    <FormControl isInvalid={false}>
      <FormLabel>{name}</FormLabel>
      <Select
        isDisabled={disabled} 
        placeholder='select option'
        ref={valueRef}
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
  valueRef: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.object })
  ]).isRequired,
};

CustomSelect.defaultProps ={
  disabled: false,
  error: false,
  errorMessage: 'issue with field',
  helperText: '',
  name: '',
  selectOptions: [],
};
