import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import cls from "classnames";

export default function Card({ name, href, imageUrl }) {
  return (
    <div>
      <Link href={`/shops/${href}`}>
        <a className={styles.cardLink}>
          <div className={cls("glass", styles.container)}>
            <div className={styles.cardHeaderWrapper}>
              <h2 className={styles.cardHeader}>{name}</h2>
            </div>
            <div className={styles.cardImageWrapper}>
              <Image
                src={imageUrl}
                width={260}
                height={160}
                className={styles.cardImage}
              />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
