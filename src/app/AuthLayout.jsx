"use client";
import { Sidebar } from "@/app/Components/Sidebar";
import { useAuth } from "./context/AuthContext";
import clsx from "clsx";

export default function AuthLayout({ children }) {
  const { isSignedIn } = useAuth();

  return (
    <div className={clsx(isSignedIn ? "md:ml-52" : "")}>
      {isSignedIn && <Sidebar />}
      {children}
    </div>
  );
}
