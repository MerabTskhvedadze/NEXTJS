import path from "path";
import fs from "fs/promises";

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
            <h1>{title}</h1>
            <p>{description}</p>
          </li>
        );
      })}
    </ul>
  );
}

export async function getStaticProps() {
  console.log("Regenerating...");

  const fullPath = path.join(process.cwd(), "data", "mock_data.json");
  const jsonData = await fs.readFile(fullPath);
  const { products }: HomeProps = JSON.parse(jsonData.toString());

  return {
    props: { products },
    //regeneration won't happend if page refreshes below 10sc
    revalidate: 10,
  };
}
