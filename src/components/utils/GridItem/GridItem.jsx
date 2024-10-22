import css from './GridItem.module.css';

const GridItem = ({ children }) => {
  return <li className={css.gridItem}>{children}</li>;
};

export default GridItem;
