import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>electricdev</div>
      <div className={styles.text}>
        NITS agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;