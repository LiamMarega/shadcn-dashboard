"use client";
import { Metadata } from "next";
import { SearchBar } from "@/components/search/searcher";
import peopleMsg from "@/lib/assets/lotties/messages.json";
import LottieFile from "@/components/ui/LottieFile";
import { log } from "console";

/* export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};
 */
export default function Page() {
  const onSubmit = async () => {
    console.log("click");

    const res = await fetch("/api/some/", {
      method: "POST",
      body: JSON.stringify("liamchoneta@gmail.com"),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <div className=" h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div>
          <h1 className="z-10 text-3xl md:text-6xl font-bold ">
            Yours customers
          </h1>
          <h2 className="z-10 text-5xl md:text-8xl  font-bold bg-gradient-to-r from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text animate-text ">
            {"Booooosted ;)"}
          </h2>
          <div className="w-6/12 pb-24 pt-10">
            <button onClick={() => onSubmit()}>click me :D</button>
            <SearchBar isAnimate={true} />
          </div>
        </div>
        <LottieFile lottie={peopleMsg} className="animate-in" />
      </div>
    </>
  );
}
