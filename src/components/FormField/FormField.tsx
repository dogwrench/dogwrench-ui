import React from 'react';
import './FormField.scss';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: { message: string };
}

export const FormField = ({
  id,
  label,
  error,
  placeholder,
}: FormFieldProps) => {
  return (
    <div
      className={`form-field-wrapper ${error && `form-field-wrapper-error`}`}
    >
      <div className="form-field-label-container">
        <label className="form-field-label" htmlFor={id}>
          {label}
        </label>
        <span className="form-field-error">{error && error.message}</span>
      </div>
      <div className="form-field-input-container">
        <input className="form-field-input" id={id} placeholder={placeholder} />
      </div>
    </div>
  );
};
