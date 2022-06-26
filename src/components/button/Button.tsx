import clsx from 'clsx';
import { Component, JSX } from 'solid-js';

import styles from './Button.module.css';

export type ButtonProps = {
  label: string;
  handleClick?: () => void;
  isBig?: boolean;
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: Component<ButtonProps> = ({ label, type, isBig, handleClick }) => {
  const buttonStyle = clsx({
    [styles.button]: true,
    [styles['button--big']]: isBig,
  });

  return (
    <button type={type} class={buttonStyle} onClick={() => handleClick && handleClick()}>
      {label}
    </button>
  );
};

export default Button;
