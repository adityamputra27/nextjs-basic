import Link from "next/link";

const Products = () => {
  return (
    <>
      <h1>Product List</h1>
      <Link href={"products/1"} replace>
        Product 1
      </Link>
      <Link href={"products/2"}>Product 2</Link>
      <Link href={"products/3"}>Product 3</Link>
      <Link href={"products/4"}>Product 4</Link>
    </>
  );
};

export default Products;
