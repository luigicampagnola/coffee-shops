import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Shops() {
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
    </div>
  );
}
