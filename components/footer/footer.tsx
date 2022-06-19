import styles from './footer.module.scss';
import Octocat from '../../public/github-octocat.svg';

const Footer = (): React.ReactElement => {
  return (
    <footer className={styles.footer}>
      <small data-testid="copyright texts">Copyright 2022 &copy;</small>
      <nav data-testid="footer - links">
        <a
          href="https://github.com/Sayvai/nextjs-playground"
          target="_blank"
          aria-label='GitHub repository: Sayvai | Next.js Playground'
          title='GitHub repository: Sayvai | Next.js Playground'
          rel="noopener noreferrer">
          <Octocat data-testid="footer - link - octocat" />
        </a>
      </nav>
    </footer>
  )
}

export default Footer;