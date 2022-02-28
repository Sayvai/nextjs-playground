import styles from './footer.module.scss';
import Octocat from '../../public/github-octocat.svg';

const Footer = (): React.ReactElement => {
  return (
    <footer className={styles.footer}>
      <small>Copyright 2022 &copy;</small>
      <nav>
        <a
          href="https://github.com/Sayvai/nextjs-playground"
          target="_blank"
          aria-label='GitHub repository: Sayvai | Next.js Playground'
          title='GitHub repository: Sayvai | Next.js Playground'
          rel="noopener noreferrer">
          <Octocat/>
        </a>
      </nav>
    </footer>
  )
}

export default Footer;