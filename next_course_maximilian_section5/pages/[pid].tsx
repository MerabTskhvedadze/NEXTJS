import path from "path";
import fs from "fs/promises";

type Product = {
  id: string;
  title: string;
  description: string;
};

type Products = {
  products: Product[];
};

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  );
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const currentProductId = params.pid;

  const fullPath = path.join(process.cwd(), "data", "mock_data.json");
  const jsonData = await fs.readFile(fullPath);
  const { products }: Products = JSON.parse(jsonData.toString());

  const currentProduct = products.find(
    (product: Product) => product.id === currentProductId
  );

  return {
    props: {
      product: currentProduct,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: "p1" } },
      { params: { pid: "p2" } },
      { params: { pid: "p3" } },
      { params: { pid: "p4" } },
    ],
    fallback: false,
  };
}
