import styles from './layout.module.scss';

import Footer from "../footer/footer";
import Header from "../header/header";


const Layout: React.FC = ({ children }): React.ReactElement => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;