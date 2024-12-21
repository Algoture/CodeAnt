import { DBIcon } from "./Icons";
const RepositoryCard = ({ name, type, language, size, updated }) => {
  return (
    <div className="border md:p-4 hover:bg-gray-100 cursor-pointer p-2  flex flex-col gap-3  bg-white shadow-md">
      <div className="flex items-center gap-2">
        <p className="md:text-xl text-lg font-medium  text-txt">{name}</p>
        <div className="flex items-center">
          <span className="md:px-2 px-1 md:py-1 py-0 text-sm rounded-full bg-accessBg border-accessBorder border text-access">
            {type}
          </span>
        </div>
      </div>
      <div className="flex w-full items-center md:gap-10 gap-4">
        <div className="flex items-center gap-2 justify-center">
          <p className="text-gray-900 font-normal md:text-base text-sm">{language}</p>
          <div className="bg-accent rounded-full size-2"></div>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <DBIcon height={12} width={10.5} />
          <p>{size}</p>
        </div>
        <p className="text-sm text-txt">Updated {updated}</p>
      </div>
    </div>
  );
};
export default RepositoryCard;
