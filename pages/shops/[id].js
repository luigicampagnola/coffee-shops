import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import coffeeStoreData from "../../data/coffee-stores.json";

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: coffeeStoreData.find((coffeeStore) => {
        return coffeeStore.id === 0; //dynamic id
      }),
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "0",
        },
      },
      {
        params: {
          id: "1",
        },
      },
      {
        params: {
          id: "300",
        }
      }
    ],
    fallback: false,
  };
}

export default function Shops(props) {
  console.log("props", props)
  const router = useRouter();
  console.log("router", router);
  return (
    <div>
      <Head>
        <title>{router.query.id}</title>
      </Head>
      <h1>{router.query.id}</h1>
      <Link href="/">
        <a>
          <button>Go Back</button>
        </a>
      </Link>
      <p>{props.coffeeStore.name}</p>
      <p>{props.coffeeStore.address}</p>
      <p>{props.coffeeStore.neighbourhood}</p>


    </div>
  );
}
