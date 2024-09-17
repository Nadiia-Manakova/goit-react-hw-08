import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Username must be at least 2 characters")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    dispatch(register(values));
    // .unwrap()
    // .then(() => {
    //   // toast.success("The new user was created successfully!");
    //   resetForm();
    // })
    // .catch(() => {})
    // .finally(() => {
    //   setSubmitting(false);
    // });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.formContainer} autoComplete="off">
          <label className={css.formLabel}>
            Username
            <Field type="text" name="name" className={css.formField} />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>

          <label className={css.formLabel}>
            Email
            <Field type="email" name="email" className={css.formField} />
            <ErrorMessage name="email" component="div" className={css.error} />
          </label>

          <label className={css.formLabel}>
            Password
            <Field type="password" name="password" className={css.formField} />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </label>

          <button type="submit" disabled={isSubmitting} className={css.btn}>
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
};
