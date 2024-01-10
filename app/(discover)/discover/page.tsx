import { SearchBar } from "@/components/search/searcher";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover",
  description: "Discover news customers and trends.",
};

export default function Page() {
  return (
    <>
      <div className="h-screen w-screen p-20 items-center justify-center">
        {/* <div className='bg-dot-light dark:hidden w-7/12 h-1/6 absolute top-0 left-0 inset-0 z-0'></div>
            <div className='light:hidden bg-dot w-44 h-screen absolute inset-0 z-0 '></div> */}
        <div className="flex flex-col gap-2 ">
          <h1 className="z-10 text-3xl md:text-6xl font-bold ">Discover new</h1>
          <h2 className="z-10 text-5xl md:text-8xl w-auto font-bold bg-gradient-to-r from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text animate-text ">
            {"customers ;)"}
          </h2>
          <div className="w-6/12 pt-10">
            <SearchBar />
          </div>
        </div>
      </div>
    </>
  );
}
