import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AxiosInstance from './AxiosInstance';

const validationSchema = yup.object({
  temperature: yup
    .string("Temperature")
    .required('Temperature is required'),
  unit: yup
    .string("Unit")
    .oneOf(['F', 'C', 'K', ],"The unit has to be F, C or K")
    .required('Unit is required'),
  date: yup
    .string('Date')
    .required('Date is required')
    .matches(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/, "Date has to be in the format of YYYY-MM-DD"),
  city: yup
    .string('City')
    .required('City is required'),
});

const CreateNewReport = () => {
  const formik = useFormik({
    initialValues: {
      temperature: '',
      unit: '',
      date: '',
      city: '',

    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert("Report has been created");
      AxiosInstance.post(
        "/reports",
        {
            temperature: values.temperature,
            unit: values.unit,
            date: values.date,
            city: values.city,
        }
      )
    },
  });

  return (
    <div>
    <p>
    </p>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          style = {{width: 750}} 
          id="temperature"
          name="temperature"
          label="Temperature"
          type="number"
          value={formik.values.temperature}
          onChange={formik.handleChange}
          error={formik.touched.temperature && Boolean(formik.errors.temperature)}
          helperText={formik.touched.temperature && formik.errors.temperature}
        />
        <p></p>
        <TextField
          style = {{width: 750}} 
          id="unit"
          name="unit"
          label="Unit"
          type="string"
          value={formik.values.unit}
          onChange={formik.handleChange}
          error={formik.touched.unit && Boolean(formik.errors.unit)}
          helperText={formik.touched.unit && formik.errors.unit}
        />
        <p>
        </p>
        <TextField
          style = {{width: 750}} 
          id="date"
          name="date"
          label="Date"
          type="string"
          value={formik.values.date}
          onChange={formik.handleChange}
          error={formik.touched.date && Boolean(formik.errors.date)}
          helperText={formik.touched.date && formik.errors.date}
        />
        <p>
        </p>
        <TextField
          style = {{width: 750}} 
          id="city"
          name="city"
          label="City"
          type="City"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
        />
        <p>
        </p>
        <Button color="primary" variant="contained"  type="submit">
            Send report
        </Button>
      </form>
    </div>
  );
};

export default CreateNewReport;