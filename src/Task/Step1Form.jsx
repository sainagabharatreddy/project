// Step1Form.jsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextField, MenuItem } from '@material-ui/core';

const Step1Form = ({ onNext }) => {
  const { handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle submission if needed
    onNext(); // Proceed to Step-2
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField label="Name" {...field} error={!!errors.name} helperText={errors.name?.message} />
        )}
      />

      <Controller
        name="age"
        control={control}
        render={({ field }) => (
          <TextField label="Age" {...field} error={!!errors.age} helperText={errors.age?.message} />
        )}
      />

      <Controller
        name="sex"
        control={control}
        render={({ field }) => (
          <TextField
            label="Sex"
            select
            {...field}
            error={!!errors.sex}
            helperText={errors.sex?.message}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
        )}
      />

      <Controller
        name="mobile"
        control={control}
        render={({ field }) => (
          <TextField label="Mobile" {...field} error={!!errors.mobile} helperText={errors.mobile?.message} />
        )}
      />

      <Controller
        name="govtIdType"
        control={control}
        render={({ field }) => (
          <TextField
            label="Govt Issued ID Type"
            select
            {...field}
            error={!!errors.govtIdType}
            helperText={errors.govtIdType?.message}
          >
            <MenuItem value="Aadhar">Aadhar</MenuItem>
            <MenuItem value="PAN">PAN</MenuItem>
          </TextField>
        )}
      />

      <Controller
        name="govtId"
        control={control}
        render={({ field }) => (
          <TextField label="Govt Issued Id" {...field} error={!!errors.govtId} helperText={errors.govtId?.message} />
        )}
      />

      <Button type="submit" variant="contained" color="primary">
        Next
      </Button>
    </form>
  );
};

export default Step1Form;
