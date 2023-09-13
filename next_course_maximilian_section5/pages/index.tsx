import path from "path";
import fs from "fs/promises";
import Link from "next/link";

type Product = {
  id: string;
  title: string;
  description: string;
};

type HomeProps = {
  products: Product[];
};

export default function Home({ products }: HomeProps) {
  return (
    <ul>
      {products.map(({ id, title, description }: Product) => {
        return (
          <li key={id}>
            <Link href={`/${id}`}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export async function getStaticProps() {
  const fullPath = path.join(process.cwd(), "data", "mock_data.json");
  const jsonData = await fs.readFile(fullPath);
  const { products }: HomeProps = JSON.parse(jsonData.toString());

  return {
    props: { products },
    //regeneration won't happend if page refreshes below 10sc
    revalidate: 10,

    //redirects to redirect page
    // redirect: {
    //   destination: "/redirect",
    // },

    //redirects to 404 page
    // notFound: true,
  };
}
