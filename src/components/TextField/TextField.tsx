import { Component, createSignal, JSX } from 'solid-js';

import styles from './TextField.module.css';

export type TextFieldProps = {
  id: string;
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: Event) => void;
  disabled?: boolean;
  required?: boolean;
  name: string;
};
const TextField: Component<TextFieldProps> = ({
  label,
  id,
  name,
  placeholder,
  onChange,
  type = 'text',
  disabled,
  required,
  value,
  ...otherProps
}) => {
  const idLabel = `${id}-label`;

  const [inputValue, setInputValue] = createSignal<string | undefined>(value);

  const handleChange = (event: Event) => {
    setInputValue((event.target as HTMLInputElement).value.replace(/[^0-9]/g, '0'));
    onChange && onChange(event);
  };

  return (
    <div class={styles['text-field']}>
      <label id={idLabel} for={id} class={styles['text-field__label']}>
        {label}
        {required ? ' *' : ''}
      </label>
      <input
        class={styles['text-field__input']}
        type={type}
        id={id}
        aria-labelledby={idLabel}
        placeholder={placeholder}
        {...otherProps}
        value={inputValue()}
        disabled={disabled}
        required={required}
        onkeyup={handleChange}
        maxLength='2'
      ></input>
    </div>
  );
};

export default TextField;
