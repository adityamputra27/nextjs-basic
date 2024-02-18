import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${params.productId}`);
    }, 100);
  });

  return {
    title: `Product ${title}`,
  };
};

// export const metadata: Metadata = {
//   title: `Product ${params.productId}`,
// };

export default function ProductDetail({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <>
      <h1>ProductDetail {params.productId}</h1>
      <Link href={"/"}>Home</Link>
    </>
  );
}
