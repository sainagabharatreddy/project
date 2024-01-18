// Step2Form.jsx
import React, { useState } from 'react';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { Button, TextField, MenuItem } from '@material-ui/core';
import axios from 'axios';

const Step2Form = ({ onSubmit }) => {
  const { handleSubmit, control, formState: { errors } } = useForm();
  const country = useWatch({ control, name: 'country' });
  const [countryOptions, setCountryOptions] = useState([]);

  const onSubmitForm = (data) => {
    // Handle submission if needed
    onSubmit(data); // Submit data to Redux
  };

  const fetchCountries = async (search) => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${search}`);
      const countries = response.data.map((country) => country.name.common);
      setCountryOptions(countries);
    } catch (error) {
      console.error('Error fetching countries', error);
      setCountryOptions([]);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Controller
        name="address"
        control={control}
        render={({ field }) => (
          <TextField label="Address" {...field} error={!!errors.address} helperText={errors.address?.message} />
        )}
      />

      <Controller
        name="state"
        control={control}
        render={({ field }) => (
          <TextField label="State" {...field} error={!!errors.state} helperText={errors.state?.message} />
        )}
      />

      <Controller
        name="city"
        control={control}
        render={({ field }) => (
          <TextField label="City" {...field} error={!!errors.city} helperText={errors.city?.message} />
        )}
      />

      <Controller
        name="country"
        control={control}
        render={({ field }) => (
          <TextField
            label="Country"
            {...field}
            onChange={(e) => {
              field.onChange(e);
              fetchCountries(e.target.value);
            }}
            InputProps={{ autoComplete: 'off' }}
            helperText={errors.country?.message}
          />
        )}
      />

      {countryOptions.length > 0 && (
        <ul>
          {countryOptions.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      )}

      <Controller
        name="pincode"
        control={control}
        render={({ field }) => (
          <TextField label="Pincode" {...field} error={!!errors.pincode} helperText={errors.pincode?.message} />
        )}
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default Step2Form;
