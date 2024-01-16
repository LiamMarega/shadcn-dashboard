import { Metadata } from "next";
import { SearchBar } from "@/components/search/searcher";
import peopleMsg from "@/lib/assets/lotties/messages.json";
import LottieFile from "@/components/ui/LottieFile";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function LandingPage() {
  return (
    <>
      <div className="grid grid-cols-2 relative">
        <div className="flex flex-col">
          <h1 className="z-10 text-3xl md:text-6xl font-bold ">
            Yours customers
          </h1>
          <h2 className="z-10 text-5xl md:text-8xl w-auto font-bold bg-gradient-to-r from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text animate-text ">
            {"Booooooosted ;)"}
          </h2>
          <div className="w-6/12 pb-24 pt-10">
            <SearchBar />
          </div>
          <div className="absolute right-0 top-0 animate-in ">
            <LottieFile lottie={peopleMsg} />
          </div>
        </div>
      </div>
    </>
  );
}
