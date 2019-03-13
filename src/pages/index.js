import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default () => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      message: '',
    }}
    onSubmit={
      (values, actions) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact-demo", ...values })
        })
        .then(() => {
          alert('Success');
          actions.resetForm()
        })
        .catch(() => {
          alert('Error');
        })
        .finally(() => actions.setSubmitting(false))
      }
    }
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
        errors.message = 'Message Required'
      }
      return errors;
    }}
  >
  {() => (
    <Form name="contact-demo" data-netlify={true}>
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