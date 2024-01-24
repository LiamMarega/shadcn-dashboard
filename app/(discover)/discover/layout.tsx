import Loading from "@/app/(discover)/discover/loading";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ClientixPlus Dashboard",
  description: "Basic dashboard with Next.js and Shadcn",
};

export default function DiscoverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Loading />
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar className="w-1/6 hidden md:block" />
        <main className="flex-1 pt-16 overflow-x-hidden overflow-y-auto ">
          {children}
        </main>
      </div>
    </>
  );
}
