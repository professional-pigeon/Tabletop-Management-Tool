import { 
  Select, 
  FormControl, 
  FormLabel, 
  FormHelperText, 
  FormErrorMessage 
} from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';


export default function PlaceSelect({ 
  error, 
  name, 
  disabled,
  helperText,
  errorMessage,
  selectOptions, 
  setSelectValue,
  placeholder
}) {
    
  return (
    <FormControl isInvalid={false}>
      <FormLabel>{name}</FormLabel>
      <Select
        isDisabled={disabled} 
        placeholder={placeholder}
        onChange={(e) => setSelectValue(JSON.parse(e.target.value))}
      >
        {selectOptions.map((opt) => 
          <option value={JSON.stringify(opt)} key={`${opt.name} ${opt.id}`}>{opt.name}</option>)}
      </Select>
      {(!error && helperText) && <FormHelperText>{helperText}</FormHelperText>}
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};

PlaceSelect.propTypes = {
  name: PropTypes.string,
  selectOptions: PropTypes.arrayOf(PropTypes.shape({ 
    name: PropTypes.string, 
    id: PropTypes.number, 
    placeType: PropTypes.string 
  })),
  setSelectValue: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
};

PlaceSelect.defaultProps ={
  name: '',
  selectOptions: [],
  setSelectValue: () => {},
  disabled: false,
  error: false,
  helperText: '',
  errorMessage: `issue with field`,
  placeholder: 'select option'
};
