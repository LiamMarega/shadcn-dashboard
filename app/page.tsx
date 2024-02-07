"use client";
import React from "react";
import { SearchBar } from "@/components/search/searcher";
import { ClientTable } from "@/components/tables/user-tables/client-table";
import peopleMsg from "@/lib/assets/lotties/messages.json";
import { users } from "@/constants/users";
import ZoomDiv from "@/components/zoom-div";
import ScrollDiv from "@/components/scroll-div";
import { KanbanBoard } from "@/components/kanban/kanban-board";
import { useGlobalStore } from "@/lib/stores/global-store";
import LottieFile from "@/components/ui/LottieFile";
import FormDialog from "@/components/custom-dialog";

export default function Page() {
  const { loading, setLoading } = useGlobalStore((state) => ({
    loading: state.loading,
    setLoading: state.setLoading,
  }));

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

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
          <h1 className=" text-3xl md:text-6xl font-bold ">Yours customers</h1>
          <h2 className=" text-5xl md:text-8xl  font-bold bg-gradient-to-r from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text animate-text ">
            {"Booooosted ;)"}
          </h2>
          <div className="w-6/12 pb-24 pt-10">
            <SearchBar isAnimate={true} />
          </div>
        </div>
        <LottieFile lottie={peopleMsg} className="animate-in" />
      </div>

      <ZoomDiv key={"zoomdiv-board"}>
        <div className=" h-screen pt-10 flex-col items-center justify-center ">
          <div className="bg-white shadow-xl p-5 rounded-xl">
            <ClientTable data={users} />
          </div>
        </div>
      </ZoomDiv>
      <div className="h-52  flex-col items-center justify-center overflow-hidden relative">
        <ScrollDiv className="flex">
          <h3 className=" text-5xl md:text-8xl font-bold bg-gradient-to-r from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text animate-text">
            INCREMENT 500% YOURS
          </h3>
        </ScrollDiv>
        <ScrollDiv invert={true} className="flex ">
          <h3 className=" text-5xl md:text-8xl font-bold bg-gradient-to-r from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text animate-text">
            CUSTOMERS LIST
          </h3>
        </ScrollDiv>
      </div>
      <div className="pt-40 ">
        <ZoomDiv key={"zoomdiv-kanban-board"}>
          <div className="h-screen  flex-col items-center justify-center ">
            <KanbanBoard />
          </div>
        </ZoomDiv>
      </div>
    </>
  );
}
