import Link from 'next/link';

import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <div>
      <h1 className={styles.h1}>Your tour</h1>
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Головна</Link>
        </li>
        <li>
          <Link href="/Page/about">Про нас</Link>
        </li>
        <li>
          <Link href="/Page/contact">Контакти</Link>
        </li>

      </ul>
    </nav>
    </div>
  );
};

export default Navbar;