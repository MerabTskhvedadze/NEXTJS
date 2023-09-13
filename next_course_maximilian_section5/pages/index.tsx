import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: any) {
  console.log(props);

  return (
    <ul>
      <li>Product 1</li>
      <li>Product 2</li>
      <li>Product 3</li>
    </ul>
  );
}

export async function getStaticProps() {
  return {
    props: { product: { id: 1, title: "Product 1" } },
  };
}
