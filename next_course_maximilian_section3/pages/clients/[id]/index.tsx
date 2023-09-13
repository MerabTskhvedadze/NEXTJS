import { useRouter } from "next/router";
import Link from "next/link";

export default function index() {
  const router = useRouter();

  console.log(router.query);

  function LoadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[projectid]",
      query: { id: "max", projectid: "1" },
    });
  }

  return (
    <div>
      client {router.query.id}'s projects
      <ul>
        <li>
          <button
            onClick={LoadProjectHandler}
            className="bg-indigo-500 hover:bg-indigo-700 p-2 my-5 rounded-lg"
          >
            Load project 1
          </button>
        </li>
        <li>
          <Link
            href="max/2"
            className="hover:text-indigo-700 hover:underline text-indigo-500"
          >
            Project 2
          </Link>
        </li>
      </ul>
    </div>
  );
}
