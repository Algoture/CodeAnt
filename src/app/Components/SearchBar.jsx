import { SearchIcon } from "./Icons";

export const SearchBar = ({ handleSearch, search = "", placeholder }) => {
  return (
    <div className="items-center border-[#D5D7DA] border  flex h-10 overflow-hidden w-full md:w-fit gap-1  rounded-lg  p-2">
      <SearchIcon height={18} width={18} />
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleSearch}
        defaultValue={search || ""}
        className="outline-none ml-1 placeholder-[#414651] text-gray-600 text-left "
      />
    </div>
  );
};
