import React from "react";
import { Formik, Form, Field } from 'formik';

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
import React from "react"
  >
  {() => (
    <Form>
      <label htmlFor="name">Name: </label>
      <Field name="name" />
      <label htmlFor="email">Email: </label>
      <Field name="email" />

      <label htmlFor="message">Message: </label>
      <Field name="message" component="textarea"/>
export default () => <div>Hello world!</div>

      <button type="submit">Send</button>
    </Form>
  )}
  </Formik>
)