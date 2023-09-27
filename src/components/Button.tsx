import React from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  label: string; // Button display text
}

// Function definition without React.FC
const Button = ({ label, ...props }: CustomButtonProps) => {
  return (
    <MuiButton variant="contained" {...props}>
      {label}
    </MuiButton>
  );
};

export default Button;
