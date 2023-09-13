import Link from "next/link";
import React from "react";

export default function index() {
  const clients = [
    { id: "max", name: "Max" },
    { id: "emanuel", name: "Emanuel" },
  ]; //server data

  return (
    <div>
      <h1>Clients</h1>

      <ul>
        {clients.map(({ id, name }) => {
          return (
            <li key={id}>
              <Link
                href={{
                  pathname: "clients/[id]",
                  query: { id },
                }}
                className="hover:text-indigo-700 hover:underline text-indigo-500"
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* <ul>
        <li>
          <Link
            href="clients/max"
            className="hover:text-indigo-700 hover:underline text-indigo-500"
          >
            Max
          </Link>
        </li>
        <li>
          <Link
            href="clients/emanuel"
            className="hover:text-indigo-700 hover:underline text-indigo-500"
          >
            Emanueo
          </Link>
        </li>
      </ul> */}
    </div>
  );
}
