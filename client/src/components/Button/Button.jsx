import { Button } from "./Button.styles";

const StyledButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default StyledButton;
