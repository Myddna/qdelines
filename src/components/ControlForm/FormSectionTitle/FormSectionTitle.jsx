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
  as: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

FormSectionTitle.defaultProps = {
  as: 'div',
  title: '',
  children: '',
  className: '',
};

export default FormSectionTitle;
