import { useRouter } from "next/router";

export default function Blog() {
  const { query } = useRouter();

  console.log(query);

  return <div>Blog</div>;
}
