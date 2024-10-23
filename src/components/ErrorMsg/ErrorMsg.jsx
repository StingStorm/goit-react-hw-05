import css from './ErrorMsg.module.css';
import { GiSadCrab } from 'react-icons/gi';

const ErrorMsg = ({ children }) => {
  console.log(children);
  return (
    <div className={css.errorMsg}>
      {children || `Ops, something went wrong`}
      <GiSadCrab size={'20rem'} color="red" />
    </div>
  );
};

export default ErrorMsg;
