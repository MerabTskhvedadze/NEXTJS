import { useRouter } from "next/router";

export default function UserProjectPage() {
  const { query } = useRouter();

  console.log(query);

  return (
    <div>
      {query.id}'s project: {query.projectid}
    </div>
  );
}
