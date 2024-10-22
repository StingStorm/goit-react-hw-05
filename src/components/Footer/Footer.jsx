import css from './Footer.module.css';
import tmdbLogo from '../../assets/tmdb.svg';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <p>
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </p>
      <img className={css.logo} src={tmdbLogo} alt="The Movie DB" />
    </footer>
  );
};

export default Footer;
