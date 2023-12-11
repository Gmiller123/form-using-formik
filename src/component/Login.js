import React from "react";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import ErrorDisplay from "./ErrorMessage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => toast.success("Form as been successfully Submitted!");

const validationSchema = yup.object({
  name: yup
    .string()
    .min(4, "Too short")
    .max(25, "Too long")
    .required("Name is Required!"),
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Fullfil the requirements."
    )
    .required("Email is Required!"),
  password: yup
    .string()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    .required("Password is Reqired!"),
});

const Login = () => {
  return (
    <div className=" flex justify-center mt-20 w-full">
      <ToastContainer />;
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          // Validate the form using the validationSchema
          validationSchema
            .validate(values)
            .then(() => {
              // Form is valid, submit logic here...
              console.log("Form submitted successfully!");

              // Display success toast

              notify();

              // Reset the form or perform any cleanup
              actions.resetForm();
            })
            .catch((error) => {
              // Handle validation errors
              console.error("Validation error:", error);
            });
        }}
        validationSchema={validationSchema}
      >
        <Form className="w-[500px] shadow-lg p-8 rounded-lg space-y-3">
          <h1 className="text-3xl font-semibold">Login Form</h1>
          <div className="flex flex-col gap-1">
            <label className="text-xl" htmlFor="fullName">
              Full Name
            </label>
            <Field
              className="border-2 border-black outline-none indent-2 rounded-sm py-2"
              name="name"
              type="text"
            />
            <ErrorDisplay name="name" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl" htmlFor="fullName">
              Email
            </label>
            <Field
              className="border-2 border-black outline-none indent-2 rounded-sm py-2"
              name="email"
              type="email"
            />
            <ErrorDisplay name="email" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl" htmlFor="fullName">
              Password
            </label>
            <Field
              className="border-2 border-black outline-none indent-2 rounded-sm py-2"
              name="password"
              type="password"
            />
            <ErrorDisplay name="password" />
          </div>
          <div className=" w-full flex items-center justify-center">
            <button
              className="text-xl font-semibold bg-black text-white rounded-md px-10 py-2 mt-10"
              type="submit"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
