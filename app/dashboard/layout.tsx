import React from "react";

export default function DashboardLayout({
  children,
  orders,
  revenue,
  users,
  login,
}: {
  children: React.ReactNode;
  orders: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <div>
      {children}
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{orders}</div>
      </div>
    </div>
  ) : (
    login
  );
}
