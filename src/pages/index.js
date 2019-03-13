import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default () => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      message: '',
    }}
    onSubmit={(values, actions) => {
      console.log('submit')
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }}
    validate={values => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const errors = {};
      if(!values.name) {
        errors.name = 'Name Required'
      }
      if(!values.email || !emailRegex.test(values.email)) {
        errors.email = 'Valid Email Required'
      }
      if(!values.message) {
        errors.email = 'Message Required'
      }
      return errors;
    }}
  >
  {() => (
    <Form>
      <label htmlFor="name">Name: </label>
      <Field name="name" />
      <ErrorMessage name="name" />

      <label htmlFor="email">Email: </label>
      <Field name="email" />
      <ErrorMessage name="email" />

      <label htmlFor="message">Message: </label>
      <Field name="message" component="textarea"/>
      <ErrorMessage name="message" />

      <button type="submit">Send</button>
    </Form>
  )}
  </Formik>
)