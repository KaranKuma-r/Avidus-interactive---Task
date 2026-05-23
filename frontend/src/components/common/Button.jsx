const Button = ({
  text,
  onClick,
  type,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="auth-btn"
    >
      {text}
    </button>
  );
};

export default Button;