import { Metadata } from "next";
import { SearchBar } from "@/components/search/searcher";
import peopleMsg from "@/lib/assets/lotties/messages.json";
import LottieFile from "@/components/ui/LottieFile";
import { ClientTable } from "@/components/tables/user-tables/client-table";
import { users } from "@/constants/data";
import ZoomDiv from "@/components/zoom-div";
import { AnimatePresence } from "framer-motion";
import ScrollDiv from "@/components/scroll-div";

/* export const metadata: Metadata = {
  title: "Clientix, Boost your business",
  description:
    "Boost your business with Clientix, Find new customers and Improve your sales.",
}; */

export default function Page() {
  const onSubmit = async () => {
    const res = await fetch("/api/some/", {
      method: "POST",
      body: JSON.stringify({ email: "liamchoneta@gmail.com" + Date.now() }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <div className="h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div>
          <h1 className="z-10 text-3xl md:text-6xl font-bold ">
            Yours customers
          </h1>
          <h2 className="z-10 text-5xl md:text-8xl  font-bold bg-gradient-to-r from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text animate-text ">
            {"Booooosted ;)"}
          </h2>
          <div className="w-6/12 pb-24 pt-10">
            <SearchBar isAnimate={true} />
          </div>
        </div>
        <LottieFile lottie={peopleMsg} className="animate-in" />
      </div>
      <ZoomDiv>
        <div className="h-screen pt-10 flex-col items-center justify-center ">
          <ClientTable data={users} />
        </div>
      </ZoomDiv>
      <div className="h-screen pt-10 flex-col items-center justify-center ">
        <ScrollDiv>
          <h3 className="z-10 text-5xl md:text-8xl  font-bold bg-gradient-to-r from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text animate-text ">
            INCREMENT 500% YOURS
          </h3>
        </ScrollDiv>
        <ScrollDiv invert={true}>
          <h3 className="z-10 text-5xl md:text-8xl  font-bold bg-gradient-to-r from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text animate-text ">
            CUSTOMERS LIST
          </h3>
        </ScrollDiv>
      </div>
    </>
  );
}
