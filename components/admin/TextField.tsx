import React from "react";

type TextFieldPropType = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField = ({ label, value, onChange }: TextFieldPropType) => {
  return (
    <div className="mb-4">
      <label htmlFor={label} className="block text-sm mb-4">
        {label}
      </label>

      <input
        id={label}
        type="text"
        placeholder={label}
        className="admin-input w-1/2"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
