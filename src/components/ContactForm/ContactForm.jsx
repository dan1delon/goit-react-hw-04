import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import css from './ContactForm.module.css';

const initialFormValues = {
  name: '',
  number: '',
};

const formValidation = Yup.object({
  name: Yup.string('You must enter a valid name!')
    .trim()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Name is required!'),
  number: Yup.string('You must enter a valid number!')
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Number is required!'),
});

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={formValidation}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <label className={css.labelWrapper}>
          <span className={css.label}>Name: </span>
          <Field type="text" name="name" className={css.input} />
          <ErrorMessage component="p" name="name" className={css.error} />
        </label>
        <label className={css.labelWrapper}>
          <span className={css.label}>Number: </span>
          <Field type="number" name="number" className={css.input} />
          <ErrorMessage component="p" name="number" className={css.error} />
        </label>
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
