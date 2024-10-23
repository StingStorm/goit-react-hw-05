import css from './Section.module.css';

const Section = ({ children, className }) => {
  return <div className={`${css.sectionPadding} ${className}`}>{children}</div>;
};

export default Section;
