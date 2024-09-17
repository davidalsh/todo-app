const Button = ({ onClick, className, children }) => {
  const classes = `p-3 cursor-pointer ${className || ""}`;
  return (
    <a onClick={onClick} className={classes}>
      {children}
    </a>
  );
};

export default Button;
