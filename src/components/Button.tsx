import { Button as MuiButton, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  label: string; // Button display text
}

const Button = ({ label, ...props }: CustomButtonProps) => {
  return (
    <MuiButton variant="contained" {...props}>
      {label}
    </MuiButton>
  );
};

export default Button;
