import Card from "@/components/card";
import Link from "next/link";
import React from "react";

export default function Orders() {
  return (
    <Card>
      Orders
      <Link href={"dashboard/archived"}>Archived</Link>
    </Card>
  );
}
