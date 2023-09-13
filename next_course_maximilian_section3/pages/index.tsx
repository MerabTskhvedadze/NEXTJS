import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <ul>
        <li>
          <Link
            href="/portfolio"
            className="hover:text-indigo-700 hover:underline text-indigo-500"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/clients"
            className="hover:text-indigo-700 hover:underline text-indigo-500"
          >
            Clients
          </Link>
        </li>
      </ul>
    </div>
  );
}
