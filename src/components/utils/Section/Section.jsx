import css from './Section.module.css';

const Section = ({ children }) => {
  return <ul className={css.sectionPadding}>{children}</ul>;
};

export default Section;
