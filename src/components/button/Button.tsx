import { Component, JSX } from 'solid-js';

import styles from './Button.module.css';

export type ButtonProps = {
  label: string;
  handleClick?: () => void;
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: Component<ButtonProps> = ({ label, type, handleClick }) => {
  return (
    <button type={type} class={styles.button}>
      {label}
    </button>
  );
};

export default Button;
