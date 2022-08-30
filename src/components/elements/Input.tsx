import React from 'react';

type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  htmlFor?: string;
  labelText?: string;
};

const Input = (props: InputProps): JSX.Element => {
  const { type, placeholder, value, onChange, htmlFor, labelText } = props;
  return (
    <div className="form-group">
      {labelText && <label htmlFor={htmlFor}>{labelText}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
};

export default Input;
