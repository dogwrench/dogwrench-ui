import React from 'react';
import styled, { css } from 'styled-components';
import './FormField.scss';

export type FormFieldWrapperProps = Partial<{
  error: any;
}>;

export const FormFieldWrapper = styled.div<FormFieldWrapperProps>`
  border: 1px solid #ffffff24;
  padding: 8px 16px;
  background-color: #303030;
  border-radius: 5px;
  ${({ error }) =>
    error &&
    css`
      border: 2px solid #cf0000;
    `}
`;

export interface FormFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
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
    <FormFieldWrapper error={error}>
      <div className="form-field-label-container">
        <label className="form-field-label" htmlFor={id}>
          {label}
        </label>
        <span className="form-field-error">{error && error.message}</span>
      </div>
      <div className="form-field-input-container">
        <input className="form-field-input" id={id} placeholder={placeholder} />
      </div>
    </FormFieldWrapper>
  );
};
