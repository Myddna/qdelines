import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormSectionTitle.module.css';

const FormSectionTitle = function ({
  as: As,
  title,
  children,
  className,
}) {
  return (
    <As className={`${styles.FormSectionTitle} ${className}`}>
      {title}
      {children}
    </As>
  );
};

FormSectionTitle.propTypes = {
  as: PropTypes.node,
  title: PropTypes.string,
  children: PropTypes.element,
  className: PropTypes.string,
};

FormSectionTitle.defaultProps = {
  as: 'div',
  title: '',
  children: null,
  className: '',
};

export default FormSectionTitle;
