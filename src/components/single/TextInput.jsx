/* eslint-disable react/forbid-prop-types */
import { 
  FormLabel, 
  FormHelperText, 
  FormControl, 
  FormErrorMessage,
  Input 
} from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';

export default function TextInput({ 
  name, 
  valueRef,
  disabled,
  placeholder,
  helperText,
  error,
  errorMessage
}) {
  return (
    <FormControl isInvalid={error}>
      <FormLabel>{name}</FormLabel>
      <Input 
        id={`input-${name}`}
        isDisabled={disabled} 
        ref={valueRef}
        placeholder={placeholder}
      />
      {(!error && helperText) && <FormHelperText>{helperText}</FormHelperText>}
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};

TextInput.propTypes = {
  valueRef: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.object })
  ]).isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  errorMessage: PropTypes.string,
};

TextInput.defaultProps ={
  name: '',
  disabled: false,
  error: false,
  helperText: '',
  errorMessage: `issue with field`,
  placeholder: ''
};
