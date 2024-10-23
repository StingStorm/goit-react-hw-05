import { ColorRing } from 'react-loader-spinner';
import css from './Loader.module.css';
import clsx from 'clsx';

const Loader = ({ backdrop }) => {
  return (
    <div className={clsx(css.loaderFlex, backdrop && css.loaderBackdrop)}>
      <ColorRing
        visible={true}
        height={backdrop ? '200' : '100'}
        width={backdrop ? '200' : '100'}
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
};

export default Loader;
