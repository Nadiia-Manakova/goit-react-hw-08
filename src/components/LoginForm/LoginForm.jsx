import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
import css from "./LoginForm.module.css";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        // toast.success("Login successful!");
        resetForm();
      })
      .catch(() => {
        // toast.error("Invalid login or password.");
      })
      .finally(() => {
        setSubmitting(false);
      });
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
            {isSubmitting ? "Logging in..." : "Log In"}
          </button>
        </Form>
      )}
    </Formik>
  );
};
