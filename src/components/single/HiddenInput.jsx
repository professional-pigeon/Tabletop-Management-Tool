import { 
  Button, 
  FormLabel, 
  Input, 
  InputGroup, 
  InputRightElement, 
  FormHelperText, 
  FormControl, 
  FormErrorMessage 
} from '@chakra-ui/react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function HiddenInput({ 
  name, 
  inputValue, 
  setInputValue, 
  disabled,
  helperText,
  error,
  errorMessage
}) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <FormControl isInvalid={error}>
      <FormLabel>{name}</FormLabel>
      <InputGroup>
        <Input 
          id={`input-${name}`}
          isDisabled={disabled} 
          type={show ? 'text' : 'password'}
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
        />
        <InputRightElement w='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
      {(!error && helperText) && <FormHelperText>{helperText}</FormHelperText>}
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};

HiddenInput.propTypes = {
  name: PropTypes.string,
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  errorMessage: PropTypes.string,
};

HiddenInput.defaultProps ={
  name: '',
  inputValue: '',
  setInputValue: () => {},
  disabled: false,
  error: false,
  helperText: '',
  errorMessage: `issue with field`
};
