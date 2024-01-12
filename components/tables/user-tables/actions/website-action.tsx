"use client";
import { Icons } from "@/components/icons";
import { User } from "@/constants/data";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Client } from "@/lib/stores/store-clients";

interface WebActionProps {
  data: Client;
}

export const WebAction: React.FC<WebActionProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <Link href="" target="_blank">
        <span>{data.website}</span>
      </Link>
    </>
  );
};
