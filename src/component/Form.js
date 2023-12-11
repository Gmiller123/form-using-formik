import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as yup from "yup";
import ErrorDisplay from "./ErrorMessage";
import { Link } from "react-router-dom";

const validationSchema = yup.object({
  name: yup.string().required("Name is Required!!!"),
  email: yup.string().required("Email is Required"),
  number: yup
    .number()
    .min(1000000000)
    .max(9999999999)
    .required("Number is Required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Uppercase, lowercase, special key and a number"
    )
    .required("Password is Required"),
});

const Forms = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Formik
        validationSchema={validationSchema}
        className=""
        initialValues={{
          name: "",
          email: "",
          number: "",
          password: "",
          gender: "",
          income: "",
          about: "",
          friends: [],
        }}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        {({ values }) => (
          <Form className=" shadow-lg p-10">
            <label className=" text-xl " htmlFor="firstName">
              First Name:
            </label>
            <Field className=" border border-red-500" name="name" type="text" />
            <br />
            <br />
            <ErrorDisplay name="name" />
            <br />
            <label htmlFor="number">number</label>
            <Field name="number" type="number" />
            <br></br>
            <ErrorDisplay name="number" />
            <br></br>
            <label htmlFor="email">email: </label>
            <Field name="email" type="email" />
            <br />
            <ErrorDisplay name="email" />
            <br />
            <label htmlFor="password">Password:</label>
            <br />
            <Field name="password" type="password" />
            <br />
            <ErrorDisplay name="password" />
            <br />
            <label htmlFor="gender">gender: </label>
            <br></br>
            <label htmlFor="gender">Male: </label>
            <Field name="gender" value="male" type="radio" />
            <label htmlFor="gender">Female: </label>
            <Field name="gender" value="female" type="radio" />
            <br />
            <br />
            <label htmlFor="select">Select: </label>
            <Field className="border-2" as="select" name="income">
              <option value="1000">Rs. 1000</option>
              <option value="2000">Rs. 2000</option>
              <option value="3000">Rs. 3000</option>
            </Field>
            <br />
            <br />
            <label htmlFor="about">About: </label>
            <br />
            <Field className="w-full border-2" as="textarea" name="about" />
            <br /> <br />
            <FieldArray
              name="friends"
              render={(arrayHelpers) => (
                <div>
                  {values.friends && values.friends.length > 0 ? (
                    values.friends.map((friend, index) => (
                      <div className=" w-fit flex gap-5 mb-2" key={index}>
                        <Field
                          className="border-2 border-black h-12 mb-2"
                          name={`friends.${index}`}
                        />
                        <button
                          className="px-5 py-2 bg-black text-white"
                          type="button"
                          onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                        >
                          -
                        </button>
                        <button
                          className="px-5 py-2 bg-black text-white"
                          type="button"
                          onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                        >
                          +
                        </button>
                      </div>
                    ))
                  ) : (
                    <button
                      className=" bg-black text-white px-4 py-3 text-2xl font-sembold"
                      type="button"
                      onClick={() => arrayHelpers.push("")}
                    >
                      {/* show this when user has removed all friends from the list */}
                      Add a friend
                    </button>
                  )}
                </div>
              )}
            />
            <button
              className="px-3 py-2 w-full bg-black text-white mt-5 text-xl font-semibold rounded-sm"
              type="submit"
            >
              Click
            </button>
          </Form>
        )}
      </Formik>

      <div>
        <Link to="/login" className=" text-5xl">
          login
        </Link>
      </div>
    </div>
  );
};

export default Forms;
