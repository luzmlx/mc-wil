import FavoriteIcon from "@mui/icons-material/Favorite";
import { useHistory } from "react-router-dom";
import styles from "./firstView.module.css";

const FirstView = () => {
  const history = useHistory();

  const confirm = () => {
    history.push("/slideshow");
  };
  return (
    <div>
      <h2>Merry Christmas Mi Amor</h2>

      <FavoriteIcon
        onClick={() => confirm()}
        style={{ fontSize: "100px" }}
        className={styles.heartIcon}
      />
      <p>Click Me!</p>
    </div>
  );
};

export default FirstView;
