import { SearchBar } from "@/components/search/searcher";
import { ClientTable } from "@/components/tables/user-tables/client-table";
import { Metadata } from "next";
import { users } from "@/constants/data";

export const metadata: Metadata = {
  title: "Discover",
  description: "Discover news customers and trends.",
};

export default function Page() {
  return (
    <>
      <div className=" w-full p-20 gap-y-24 items-center relative justify-center">
        {/*         <div className="bg-dot-light dark:hidden w-9/12 h-2/6 absolute top-32 left-40 z-0  "></div>
        <div className="light:hidden bg-dot w-9/12 h-3/6 absolute top-20 left-40 z-0 "></div> */}
        <div className="flex flex-col">
          <h1 className="z-10 text-3xl md:text-6xl font-bold ">Discover new</h1>
          <h2 className="z-10 text-5xl md:text-8xl w-auto font-bold bg-gradient-to-r from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text animate-text ">
            {"customers ;)"}
          </h2>
          <div className="w-6/12 pb-24 pt-10">
            <SearchBar />
          </div>
        </div>
        <div className="flex flex-col space-y-8 ">
          <ClientTable data={users} />
        </div>
      </div>
    </>
  );
}
