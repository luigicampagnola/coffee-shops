import Link from "next/link";
import styles from "../styles/Hello.module.css";
import Head from "next/head";

export default function Hello() {
  console.log("styles on hello", styles.container);
  return (
    <div>
      <Head>
        <title>Hello page</title>
      </Head>
      <h1 className={styles.container}>Hello</h1>
      <h2>
        Click{" "}
        <Link href="/">
          <a>Here</a>
        </Link>{" "}
        if you want to go back home.
      </h2>
    </div>
  );
}
