import { Link } from 'react-router-dom';
import css from './GoBackBtn.module.css';
const GoBackBtn = ({ goBackRef }) => {
  return (
    <Link className={css.link} to={goBackRef.current}>
      GoBackBtn
    </Link>
  );
};

export default GoBackBtn;
