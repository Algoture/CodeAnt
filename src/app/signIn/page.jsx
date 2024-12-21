"use client";
import { AuthLogo, GitHubIcon, Logo } from "../Components/Icons";
import Image from "next/image";
import clsx from "clsx";
import { useAuth } from "../context/AuthContext";
const HomePage = () => {
  const { isSignedIn } = useAuth();
  return (
    <div
      className={clsx(
        "min-h-screen w-screen flex  items-center justify-between",
        isSignedIn ? "-ml-52 " : ""
      )}
    >
      <AuthLogo width={200} height={200} />
      {/* Left Section */}
      <div className="h-full md:flex hidden items-center justify-center flex-col  w-1/2 ">
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
        <div className="flex flex-col w-fit  gap-4 p-6 bg-white shadow-xl z-40 rounded-3xl">
          <div className="flex gap-10">
            <Image width={45} height={40} alt="gitlab" src={"/graph.png"} />
            <div className="text-sm flex flex-col items-center justify-center mt-1">
              <span className="text-accent text-sm font-bold">↑ 14%</span>
              <p>This week</p>
            </div>
          </div>
          <div className="text-lg font-semibold">Issues Fixed</div>
          <div className="text-3xl font-bold ">500K+</div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 m-2 flex flex-col w-full  rounded-lg">
        <div className=" bg-white   shadow-lg rounded-lg p-4">
          <div className="p-9 flex justify-between flex-col items-center">
            <div className="w-full text-center flex flex-col items-center">
              <div className="flex gap-1">
                <Logo width={20} height={20} />
                <p className="text-xl">CodeAnt AI</p>
              </div>
              <h2 className="text-xl font-semibold my-4">
                Welcome to CodeAnt AI
              </h2>
              <div className="flex w-full justify-between gap-2 px-4">
                <button className="px-4 py-2 h-fit bg-accent font-semibold  text-white rounded-md w-full">
                  SAAS
                </button>
                <button className="px-4 py-2 h-fit text-nowrap border border-[#D8DAE5]  text-gray-800 font-semibold  rounded-md w-full">
                  Self Hosted
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <button className="md:w-1/2 w-10/12 flex items-center justify-center gap-2 px-4 py-3  text-black font-semibold  rounded-md border border-[#D8DAE5]">
              <GitHubIcon width={20} height={20} />
              Sign in with GitHub
            </button>
            <button className="md:w-1/2 w-10/12 flex items-center justify-center gap-2 px-4 py-3  text-black font-semibold  rounded-md border border-[#D8DAE5]">
              <Image width={20} height={20} alt="gitlab" src={"/azure.png"} />
              Sign in with Bitbucket
            </button>
            <button className="md:w-1/2 w-10/12 flex items-center justify-center gap-2 px-4 py-3  text-black font-semibold  rounded-md border border-[#D8DAE5]">
              <Image
                width={20}
                height={20}
                alt="gitlab"
                src={"/bitbucket.png"}
              />
              Sign in with Azure DevOps
            </button>
            <button className="md:w-1/2 w-10/12 flex items-center justify-center gap-2 px-4 py-3  text-black font-semibold  rounded-md border border-[#D8DAE5]">
              <Image width={20} height={20} alt="gitlab" src={"/gitlab.png"} />
              Sign in with GitLab
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
