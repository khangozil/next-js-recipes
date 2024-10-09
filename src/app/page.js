import Link from "next/link";


export default function Home() {
  return (
    <div>
          <h1>Recipes page</h1>
          <Link href={"/recipes-list"}>Redirect recipes </Link>
    </div>

  );
}
