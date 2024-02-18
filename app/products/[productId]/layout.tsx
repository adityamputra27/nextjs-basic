import React from "react";

export default function ProductDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <h3>Featured Products</h3>
    </div>
  );
}
