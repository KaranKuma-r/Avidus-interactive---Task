const Input = ({
  type,
  placeholder,
  name,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      className="auth-input"
    />
  );
};

export default Input;