import { useRouter } from "next/router";

export default function PortfolioProject() {
  const { query } = useRouter();

  return <div>Portfolio {query.projectid}</div>;
}
