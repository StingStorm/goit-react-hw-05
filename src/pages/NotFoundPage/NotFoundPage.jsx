import { GiSadCrab } from 'react-icons/gi';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <main>
      <div className={css.notFoundPage}>
        Page is not found
        <GiSadCrab size={'20rem'} color="red" />
      </div>
    </main>
  );
};

export default NotFoundPage;
