"use client";

import { repositories } from "../utils/data";
import RepositoryCard from "../Components/RepositoryCard";
import { Logo, PlusIcon, RefreshIcon } from "../Components/Icons";
import { useEffect, useState } from "react";
import { SearchBar } from "../Components/SearchBar";
import { useSidebar } from "../context/SidebarContext";
import clsx from "clsx";
const Repos = () => {
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState([]);
  useEffect(() => {
    const searchTerm = search.trim().toLowerCase();
    const result = repositories.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm) ||
        user.language.toLowerCase().includes(searchTerm) ||
        user.type.toLowerCase().includes(searchTerm) ||
        user.size.includes(searchTerm)
    );
    setSearched(result);
  }, [search, repositories]);
  const { mobileMenuOpen } = useSidebar();
  return (
    <div className="md:p-4 p-1">
      <div className="flex w-full  flex-col p-2  md:p-3 gap-4 rounded-tr-lg rounded-tl-lg ">
        <div
          className={clsx(
            " items-center w-full md:hidden flex",
            mobileMenuOpen ? "hidden" : "flex"
          )}
        >
          <Logo height={22} width={22} />
          <h1 className="text-2xl mt-1">CodeAnt AI</h1>
        </div>
        <div className="flex justify-between md:flex-row flex-col md:gap-0 gap-2">
          <div className="flex justify-center flex-col">
            <p className="font-semibold text-txt text-2xl ">Repositories</p>
            <p className="text-[#414651] text-sm ">33 total repositories</p>
          </div>
          <div className="flex gap-3">
            <button className="h-10 border-[#D5D7DA] border px-3 py-2 gap-1 text-sm rounded-lg flex items-center">
              <RefreshIcon height={17} width={17} />
              Refresh All
            </button>
            <button className="h-10 px-3 py-2 gap-1 text-sm rounded-lg flex items-center bg-accent text-white fill-white">
              <PlusIcon height={17} width={17} />
              Add Repository
            </button>
          </div>
        </div>
        <SearchBar
          placeholder={"Search Repositories"}
          handleSearch={(e) => setSearch(e.target.value)}
          search={search}
        />
      </div>
      {searched.map((repo, index) => (
        <RepositoryCard key={index} {...repo} />
      ))}
    </div>
  );
};

export default Repos;
