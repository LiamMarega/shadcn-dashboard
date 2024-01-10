"use client";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { User } from "@/constants/data";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/icons";

interface ProductsClientProps {
  data: User[];
}

export const UserClient: React.FC<ProductsClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Users (${data.length})`}
          description="Manage users for your business"
        />
        <div className="flex gap-5">
          <Button
            className="text-xs md:text-sm"
            onClick={() => router.push(`/dashboard/user/new`)}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
          <Button
            className="text-xs md:text-sm"
            onClick={() => router.push(`/discover`)}
          >
            <Icons.search className="mr-2 h-4 w-4" /> Search more
          </Button>
        </div>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};
