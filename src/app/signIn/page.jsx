"use client";
import { AuthLogo, GitHubIcon, KeyIcon, Logo } from "../Components/Icons";
import Image from "next/image";
import clsx from "clsx";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
const HomePage = () => {
  const [btn, setBtn] = useState(false);
  const { isSignedIn } = useAuth();
  return (
    <div
      className={clsx(
        "min-h-screen w-screen flex  items-center ",
        isSignedIn ? "-ml-52 " : ""
      )}
    >
      <AuthLogo width={200} height={200} />
      {/* Left */}
      <div className="h-full lg:flex relative hidden items-center justify-center flex-col  w-1/2 ">
        <div className="flex flex-col items-start p-6 w-fit bg-white shadow-md rounded-3xl">
          <h2 className="text-lg font-semibold mb-2 flex p-4 ">
            <Logo height={20} width={20} />
            AI to Detect & Autofix Bad Code
          </h2>
          <div className="text-sm gap-8 text-center flex ">
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold text-lg">30+</p>
              <p>Language Support</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold text-lg">10K+</p>
              <p>Developers</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold text-lg">100K+</p>
              <p>Hours Saved</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-fit gap-4 absolute right-14 top-[90%] p-6 bg-white shadow-xl z-40 rounded-3xl">
          <div className="flex gap-10">
            <Image width={45} height={40} alt="gitlab" src={"/graph.png"} />
            <div className="text-sm flex flex-col items-center justify-center ">
              <span className="text-[#0049C6] text-sm font-bold">↑ 14%</span>
              <p>This week</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold">Issues Fixed</p>
            <p className="text-3xl font-bold ">500K+</p>
          </div>
        </div>
      </div>

      {/* Right  */}
      <div className="lg:w-1/2 justify-center flex min-h-screen bg-[#FAFAFA] flex-col w-full p-5  rounded-lg">
        <div className=" bg-white   shadow-lg rounded-lg py-4">
          <div className="p-6 flex  justify-between flex-col items-center">
            <div className="w-full text-center flex flex-col items-center">
              <div className="flex gap-1">
                <Logo width={20} height={20} />
                <p className="text-xl">CodeAnt AI</p>
              </div>
              <h2 className="text-xl font-semibold my-4">
                Welcome to CodeAnt AI
              </h2>
              <div className="flex w-full justify-between sm:px-4">
                <button
                  className={clsx(
                    "px-4 py-2 h-fit font-semibold rounded-md w-full",
                    btn
                      ? "text-gray-800  border border-[#D8DAE5] "
                      : "bg-accent text-white "
                  )}
                  onClick={() => setBtn(false)}
                >
                  SAAS
                </button>
                <button
                  className={clsx(
                    "px-4 py-2 h-fit text-nowrap font-semibold  rounded-md w-full",
                    btn
                      ? "bg-accent text-white "
                      : "text-gray-800  border border-[#D8DAE5] "
                  )}
                  onClick={() => setBtn(true)}
                >
                  Self Hosted
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <button className={clsx("OauthBtn", btn ? "hidden" : "flex")}>
              <GitHubIcon width={20} height={20} />
              Sign in with GitHub
            </button>
            <button className={clsx("OauthBtn", btn ? "hidden" : "flex")}>
              <Image width={20} height={20} alt="gitlab" src={"/bitbucket.png"} />
              Sign in with Bitbucket
            </button>
            <button className={clsx("OauthBtn ", btn ? "hidden" : "flex")}>
              <Image
                width={20}
                height={20}
                alt="gitlab"
                src={"/azure.png"}
              />
              Sign in with Azure DevOps
            </button>
            <button className="flex OauthBtn">
              <Image width={20} height={20} alt="gitlab" src={"/gitlab.png"} />
              {btn ? "Self Hosted GitLab" : "Sign in with GitLab"}
            </button>
            <button className={clsx("OauthBtn", btn ? "flex" : "hidden")}>
              <KeyIcon width={20} height={20} />
              Sign in with SSO
            </button>
          </div>
        </div>
        <p className="text-center text-sm mt-6">
          By signing up you agree to the{" "}
          <a href="#" className="font-bold">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default HomePage;
