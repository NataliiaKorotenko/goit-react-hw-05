import { Link } from "react-router-dom";
import css from '../GoBack/GoBack.module.css'

export default function GoBack({ goBackRef }) {
  return (
    <div className={css.btnGoBack}>
      <Link to={goBackRef.current} className={css.textGoBack}>Go back</Link>
    </div>
  );
}
