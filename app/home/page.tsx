import Link from "next/link";

const Home = () => {
  return (
    <>
      <Link href={"/"}>Home</Link>
      <Link href={"blog"}>Blog</Link>
      <Link href={"products"}>Products</Link>
    </>
  );
};

export default Home;
