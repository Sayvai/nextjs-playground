import styles from './header.module.scss';

import Link from 'next/link';
import { useRouter } from "next/router";

const Header = (): React.ReactElement => {
  const { pathname } = useRouter();

  return (
    <>
      <header className={styles.header}>
        <Link href="/"><a><h1>Next.js Playground</h1></a></Link>
        <nav>
          <div data-menu-item-type="more">
            <div data-menu-item-type="more-main-item">
              <Link href="/playground"><a className={pathname.includes('/playground') ? styles.active : ""}>Playground</a></Link>
            </div>
            <div data-menu-item-type="more-sub-items">
              <Link href="/playground/news-aggregator"><a className={pathname.includes('/playground/news-aggregator') ? styles.active : ""}>News Agrregator (SSR)</a></Link>
            </div>
          </div>
          <Link href="/dev-tips"><a className={pathname.includes('/dev-tips') ? styles.active : ""}>Dev Tips</a></Link>
          <Link href="/about"><a className={pathname.includes('/about') ? styles.active : ""}>About</a></Link>
        </nav>
      </header>
    </>
  );
}

export default Header;