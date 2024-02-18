import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Homepage</h1>
      <Link href={"/"}>Home </Link>
      <Link href={"about"}>About </Link>
      <Link href={"products"}>Products</Link>
    </main>
  );
}
