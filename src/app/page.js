"use client";
import Link from "next/link";
import { useAuth } from "./context/AuthContext";

const page = () => {
  const { isSignedIn, setIsSignedIn } = useAuth();
  return (
    <div className="m-4 ">
      <Link
        href="/repo"
        className="OauthBtn "
        // onClick={() => setIsSignedIn(false)}
      >
        Repo Page
      </Link>
      <Link
        href="/signIn"
        className="OauthBtn ml-4"
        onClick={() => setIsSignedIn(!isSignedIn)}
      >
        Auth Page
      </Link>
    </div>
  );
};

export default page;
