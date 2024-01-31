"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function FormDialog() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //close dialog after submit
    const dialog = document.getElementById("dialog");
    dialog?.setAttribute("open", "false");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="bg-secondaryColor relative inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white duration-300 "
        >
          Subscribe
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Stay informed</DialogTitle>
          <DialogDescription>
            Subscribe to stay informed of the latest news
          </DialogDescription>
        </DialogHeader>
        <form
          id="todo-form"
          className="grid gap-4 py-4"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="title"
              type="email"
              name="email"
              alt="email"
              placeholder="email@gmail.com"
              className="col-span-4"
              required
            />
          </div>
        </form>
        <DialogFooter>
          <Button type="submit" size="sm" form="todo-form">
            Send
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
