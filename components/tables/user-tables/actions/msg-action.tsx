"use client";
import { Icons } from "@/components/icons";
import { User } from "@/constants/data";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Client } from "@/lib/stores/store-clients";

interface MsgActionProps {
  data: Client;
}

export const MsgAction: React.FC<MsgActionProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const params = useParams();

  const onConfirm = async () => {};

  return (
    <>
      <Link href="" target="_blank">
        <Icons.messageCircle />
      </Link>
    </>
  );
};
