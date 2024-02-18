"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    alert("Order successfully");
    router.push("/");
  };

  return (
    <>
      <div>OrderProduct</div>
      <h1>Order</h1>
      <br />

      <button type="button" onClick={handleClick}>
        Place Order
      </button>
    </>
  );
}
