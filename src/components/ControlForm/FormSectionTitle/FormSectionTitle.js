import React, { Children } from "react";
import styles from "./FormSectionTitle.module.css";

const FormSectionTitle = ({
  as: As,
  title = "",
  children = "",
  className = "",
}) => {
  return (
    <As className={`${styles.FormSectionTitle} ${className}`}>
      {title}
      {children}
    </As>
  );
};

FormSectionTitle.propTypes = {};

FormSectionTitle.defaultProps = {
  as: "div",
};

export default FormSectionTitle;
