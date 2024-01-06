import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover",
  description: "Discover news customers and trends.",
};

export default function Page() {
  return (
    <>
      <div className="h-screen w-screen items-center justify-center">
        <h1>discover</h1>
      </div>
    </>
  );
}
