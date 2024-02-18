"use client";

import Link from "next/link";
import React, { useState } from "react";
import "./../../app/globals.css";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Forgot Password", href: "/forgot-password" },
];

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [input, setInput] = useState("");

  return (
    <>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            className={`font-bold mr-4 ${
              isActive ? "text-slate-900" : "text-blue-500"
            }`}
            key={link.href}
          >
            {link.name}
          </Link>
        );
      })}
      <div>{children}</div>
    </>
  );
};

export default AuthLayout;
