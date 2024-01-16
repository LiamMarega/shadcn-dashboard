"use client";
import React from "react";
import { FormEvent, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Input } from "@nextui-org/input";
import DropMenu from "./dropdown";
import { Kbd } from "@nextui-org/kbd";
import { Icons } from "../icons";
import { useClientStore } from "@/lib/stores/store-clients";
import { useGlobalStore } from "@/lib/stores/global-store";

export const SearchBar = ({ isAnimate = false }: { isAnimate?: boolean }) => {
  const [value, setValue] = useState("");

  const { getClient } = useClientStore();
  const { setLoading } = useGlobalStore();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await getClient(value);
    setLoading(false);
  };

  return (
    <form onSubmit={(e) => onSubmit(e)} className="w-full ">
      <Input
        radius="full"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "rounded-md",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            "pl-4",
            ,
          ],
          innerWrapper: ["bg-transparent", "rounded-md", "relative"],
          inputWrapper: [
            "shadow-xl",
            "hover:shadow-primaryColor  duration-500",
            "rounded-md",
            "h-16",
            "min-w-[24rem]",
            "md:min-w-[32rem]",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder={isAnimate ? "" : "Type keywords..."}
        startContent={
          <div className="flex  grid-cols-2 items-center justify-center">
            <Icons.search />
            {isAnimate && (
              <div className="w-full pl-5">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Machine shop",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Taller",
                    1000,
                    "Inmobiliaria",
                    1000,
                    "Peluqueria, estetica",
                    1000,
                  ]}
                  wrapper="span"
                  style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                  className="text-nowrap"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
            )}
          </div>
        }
        endContent={
          <div className="flex gap-x-3 w-60">
            <DropMenu />
            <Kbd
              as="button"
              type="submit"
              keys={["enter"]}
              className="flex items-center justify-center w-12 opacity-60 hover:opacity-100 duration-200  "
            />
          </div>
        }
      />
    </form>
  );
};
