type TextAreaPropType = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea = ({ label, value, onChange }: TextAreaPropType) => {
  return (
    <div className="mb-4">
      <label htmlFor={label} className="block text-sm mb-4">
        {label}
      </label>

      <textarea
        id={label}
        placeholder={label}
        className="admin-input w-1/2"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
