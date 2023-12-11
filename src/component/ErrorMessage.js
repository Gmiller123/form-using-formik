import React from "react";
import { ErrorMessage } from "formik";

const ErrorDisplay = ({ name }) => {
  return (
    <div className="text-red-500 font-semibold text-base">
      <ErrorMessage name={name} />
    </div>
  );
};

export default ErrorDisplay;
