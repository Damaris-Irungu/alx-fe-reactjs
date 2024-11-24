import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const FormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Form submitted successfully:', values);
    resetForm();
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h2>Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={RegistrationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Username Field */}
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="username">Username:</label>
              <Field
                type="text"
                id="username"
                name="username"
                style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
              />
              <ErrorMessage name="username" component="p" style={{ color: 'red', fontSize: '12px' }} />
            </div>

            {/* Email Field */}
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                id="email"
                name="email"
                style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
              />
              <ErrorMessage name="email" component="p" style={{ color: 'red', fontSize: '12px' }} />
            </div>

            {/* Password Field */}
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                id="password"
                name="password"
                style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
              />
              <ErrorMessage name="password" component="p" style={{ color: 'red', fontSize: '12px' }} />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '10px',
                background: 'blue',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
              }}
            >
              {isSubmitting ? 'Submitting...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;