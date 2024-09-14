import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import * as Yup from "yup";
import { setLocale } from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

export const ContactForm = ({ onAdd }) => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d+$/, "Number must contain only digits")
      .min(3, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
  });

  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  const nameFieldId = useId();
  const phoneFieldId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.formContainer}>
        <div className={css.formFieldWrap}>
          <label htmlFor={nameFieldId} className={css.formLabel}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            className={css.formField}
          />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>

        <div className={css.formFieldWrap}>
          <label htmlFor={phoneFieldId} className={css.formLabel}>
            Phone number
          </label>
          <Field
            type="phone"
            name="number"
            id={phoneFieldId}
            className={css.formField}
          />
          <ErrorMessage name="number" component="div" className={css.error} />
        </div>

        <button type="submit" className={css.btn}>
          Submit
        </button>
      </Form>
    </Formik>
  );
};
