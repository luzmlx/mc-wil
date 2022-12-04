import FavoriteIcon from "@mui/icons-material/Favorite";
import { useHistory } from "react-router-dom";
import { IconButton } from "@mui/material";
import styles from "./firstView.module.css";

const FirstView = () => {
  const history = useHistory();

  const confirm = () => {
    history.push('/merry-christmas');
  };
  return (
    <div>
      <h2>Merry Christmas Mi Amor</h2>
      <IconButton 
      onClick={() => confirm()}
      className={styles.iconContainer} 
      >
        <FavoriteIcon
          style={{ fontSize: "100px" }}
          className={styles.heartIcon}
        />
        <p>Click Me!</p>
      </IconButton>
      {/* <p>This will be a heart button that says Click Me !</p> */}
    </div>
  );
};

export default FirstView;
