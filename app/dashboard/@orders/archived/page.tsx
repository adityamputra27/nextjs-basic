import Card from "@/components/card";
import Link from "next/link";
import React from "react";

export default function ArchivedOrders() {
  return (
    <Card>
      Orders
      <Link href={"/dashboard"}>Unarchived</Link>
    </Card>
  );
}
