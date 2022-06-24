import { Component } from 'solid-js';
import clsx from 'clsx';
import { MenuIcon } from '../../icons';
import styles from './Header.module.css';

export type HeaderProps = {
  title: string;
  logoSrc?: string;
  altLogo?: string;
};

const Header: Component<HeaderProps> = ({ title, logoSrc, altLogo }) => {
  return (
    <div class={styles.header}>
      <div class={styles.header__content}>
        <div class={styles.header__logo}>
          <a href='#'>
            <span class={clsx({ 'sr-only': !!logoSrc })}>{title}</span>
          </a>
        </div>
        <div class={styles['header__navigation']}>
          <button type='button' class={styles['header__mobile-button']} aria-expanded='false'>
            <span class='sr-only'>Open menu</span>
            <MenuIcon />
          </button>
        </div>
        {/* <nav className="hidden md:flex space-x-10">
            <div className="relative">
            </div>
            </nav> */}
        <div class={styles['header__end-menu']}>
          <button class={styles['header__desktop-button']}>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
