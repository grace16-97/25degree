import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./post.module.css";

const Post = ({ post, userId,userProfile,user}) => {
  const history = useHistory();
  const onClick = () => {
    history.push({
      pathname: "/detail",
      state: { post, userId,userProfile},
    });
  };
  return (
    <div className={styles.post}>
      <img
        className={styles.image}
        src={post.images[0]}
        alt=""
        onClick={onClick}
      />
    </div>
  );
};

export default Post;
