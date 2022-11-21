import Head from "next/head";
import { useContext } from "react";
import { Header } from "../components/header";
import { Description } from "../components/sections/contents";
import { Slider } from "../components/sections/slider";
import { SideBar } from "../components/sidebar";
import { OpenMenuContext } from "../context/openMenuContext";
import { OpenMenuProvider } from "../providers/openMenuProvider";
import { ProductCountProvider } from "../providers/productCountProvider";

export default function Home() {
  const ctx = useContext(OpenMenuContext);
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
      <div className="max-w-7xl relative mx-auto px-0 md:px-5">
        <OpenMenuProvider>
          <ProductCountProvider>
            <Header />
            <SideBar />
            <main className="min-h-screen">
              <section className="grid grid-cols-1 max-w-6xl mx-auto mt-0  md:mt-5 md:grid-cols-2">
                <Slider />
                <Description />
              </section>
            </main>
          </ProductCountProvider>
        </OpenMenuProvider>
      </div>
    </>
  );
}
