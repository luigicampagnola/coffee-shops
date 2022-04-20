import styles from "./banner.module.css";
import Link from "next/link";

export default function Banner({ buttonText, handleOnClick }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee </span>
        <span className={styles.title2}>shop</span>
      </h1>
      <p className={styles.subTitle}>Discover your nearest shop</p>
      <div className={styles.buttonWrapper}>
        <Link href="/shops/shops">
          <a>
            <button className={styles.button} onClick={handleOnClick}>
              {buttonText}
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}
