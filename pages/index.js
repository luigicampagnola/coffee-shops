import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  console.log("styles on home", styles.container);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
          Hey, here's the {" "}
          <Link href='/hello'>
            <a>link</a>
          </Link>
        </h1>
      </main>
    </div>
  );
}
