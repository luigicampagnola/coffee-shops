import styles from "./fotter.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/image3vector.svg" alt="Vercel Logo" width={94} height={112} />
          </span>
        </a>
      </footer>
    </div>
  );
}
