function Button({ children, onClick }) {
  return (
    <button className="ResetButton" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
