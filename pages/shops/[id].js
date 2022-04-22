import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/coffee-store.module.css";

import coffeeStoreData from "../../data/coffee-stores.json";

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: coffeeStoreData.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id; //dynamic id
      }),
    },
  };
}

export function getStaticPaths() {
  const paths = coffeeStoreData.map((coffeeStore) => {
    console.log(coffeeStore);
    return {
      params: {
        id: coffeeStore.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

export default function Shops(props) {
  console.log("props", props);
  const router = useRouter();
  console.log("router", router);

  if (router.isFallback) {
    return <div>Loading..</div>;
  }
  const { address, name, neighbourhood } = props.coffeeStore; // destructured props
  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <Link href="/">
        <a>
          <button>Go Back</button>
        </a>
      </Link>
      <div className={styles.container}>
        <div className={styles.nameWrapper}>
          <p className={styles.name}>{name}</p>
        </div>
        <p className={styles.text}>{address}</p>
        <p className={styles.text}>{neighbourhood}</p>
      </div>
    </div>
  );
}
