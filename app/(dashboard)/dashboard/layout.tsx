import Header from "@/components/layout/header";
import Providers from "@/components/layout/providers";
import Sidebar from "@/components/layout/sidebar";
import type { Metadata } from "next";
import { getServerSession } from "next-auth/next";

export const metadata: Metadata = {
  title: "ClientixPlus Dashboard",
  description: "Basic dashboard with Next.js and Shadcn",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <>
      <Providers session={session}>
        <Header />
        <div className="flex h-screen overflow-hidden">
          <Sidebar className="w-1/6 hidden md:block" />
          <main className="flex-1 pt-16 overflow-x-hidden overflow-y-auto ">
            {children}
          </main>
        </div>
      </Providers>
    </>
  );
}
