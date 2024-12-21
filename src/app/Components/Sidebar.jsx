"use client";

import Link from "next/link";
import clsx from "clsx";
import {
  SettingsIcon,
  MenuIcon,
  CloseIcon,
  HomeIcon,
  BookIcon,
  CloudIcon,
  CodeIcon,
  Logo,
  PhoneIcon,
  LogoutIcon,
} from "./Icons";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";

export const Sidebar = () => {
  const { mobileMenuOpen, setMobileMenuOpen } = useSidebar();

  return (
    <>
      <button
        className="md:hidden fixed top-4 right-4 z-50 p-4 bg-primary text-black rounded-full"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <CloseIcon height={18} width={17.35} />
        ) : (
          <MenuIcon height={18} width={17.35} />
        )}
      </button>
      <div
        className={clsx(
          "fixed left-0 top-0 md:h-screen h-fit border bg-white md:translate-x-0 md:z-auto md:w-fit w-full shadow-lg p-4 flex flex-col gap-2 transition-transform",
          mobileMenuOpen ? "translate-x-0 z-40" : "-translate-x-full z-[-1]"
        )}
      >
        <div className="flex md:text-center text-left items-center md:mt-0 mt-2 w-full md:mb-4 overflow-hidden">
          <Logo height={22} width={22} />
          <h1 className="text-2xl mt-1">CodeAnt AI</h1>
        </div>
        <select className="relative bg-gray-50 border border-[#D5D7DA] text-gray-900 text-sm rounded-lg block w-full p-2.5">
          <option value="1">UtkarshDhairyaPa..</option>
          <option value="2">UtkarshDhairyaPa2..</option>
          <option value="3">UtkarshDhairyaPa3..</option>
          <option value="4">UtkarshDhairyaPa4..</option>
        </select>
        <div className="flex h-full flex-col justify-between">
          <div>
            <SidebarItem
              href={""}
              label={"Repositories"}
              icon={<HomeIcon height={18} width={17.35} />}
            />
            <SidebarItem
              href={"ai"}
              label={"AI Code Review"}
              icon={<CodeIcon height={18} width={17.35} />}
            />
            <SidebarItem
              href={"cloud"}
              label={"Cloud Security"}
              icon={<CloudIcon height={18} width={17.35} />}
            />
            <SidebarItem
              href={"use"}
              label={"How to Use"}
              icon={<BookIcon height={18} width={17.35} />}
            />
            <SidebarItem
              href={"settings"}
              label={"Settings"}
              icon={<SettingsIcon height={18} width={17.35} />}
            />
          </div>
          <div className="flex flex-col gap-2 px-2">
            <button className="flex items-center py-1 gap-2">
              <PhoneIcon width={18} height={18} /> Support
            </button>
            <button className="flex items-center py-1 gap-2">
              <LogoutIcon width={18} height={18} /> Logout
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

const SidebarItem = ({ href, label, icon }) => {
  const path = usePathname();
  const { mobileMenuOpen } = useSidebar();
  return (
    <Link
      href={`/${href}`}
      className={clsx(
        mobileMenuOpen
          ? "text-[#414651]"
          : path === `/${href}`
          ? "bg-accent fill-white text-white"
          : "text-[#414651]",
        "flex items-center gap-3 text-base p-2 transition-all rounded-lg font-semibold"
      )}
    >
      {icon}
      {label}
    </Link>
  );
};
