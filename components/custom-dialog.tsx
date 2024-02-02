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
import { Icons } from "./icons";

export default function FormDialog() {
  const [status, setStatus] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(true);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
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
      {status ? (
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Thank you</DialogTitle>
            <DialogDescription>
              You have successfully subscribed to our newsletter
            </DialogDescription>
            <div className="flex justify-center items-center w-full p-5">
              <Icons.check className="h-12 w-12 text-green-500" />
            </div>
          </DialogHeader>
          <DialogFooter>
            <DialogTrigger>
              <Button size="sm" onClick={() => setStatus(false)}>
                Close
              </Button>
            </DialogTrigger>
          </DialogFooter>
        </DialogContent>
      ) : (
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
                value={email}
                onChange={(e) => handleOnChange(e)}
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
      )}
    </Dialog>
  );
}
