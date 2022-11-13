import Head from "next/head";
import { Header } from "../components/header";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        />
        <title>Frontend Mentor | E-commerce product page</title>
        <meta
          name="description"
          content="This is a solution to the E-commerce product page challenge on Frontend Mentor"
        />
      </Head>
      <div className="max-w-7xl mx-auto px-0 md:px-5">
        <Header />
      </div>
    </>
  );
}
