import { Metadata } from "next";
import { SearchBar } from "@/components/search/searcher";
import peopleMsg from "@/lib/assets/lotties/messages.json";
import LottieFile from "@/components/ui/LottieFile";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function Page() {
  return (
    <>
      <div className=" h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div>
          <h1 className="z-10 text-3xl md:text-6xl font-bold ">
            Yours customers
          </h1>
          <h2 className="z-10 text-5xl md:text-8xl  font-bold bg-gradient-to-r from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text animate-text ">
            {"Booooooosted ;)"}
          </h2>
          <div className="w-6/12 pb-24 pt-10">
            <SearchBar isAnimate={true} />
          </div>
        </div>
        <div>
          <LottieFile lottie={peopleMsg} />
        </div>
      </div>
    </>
  );
}
