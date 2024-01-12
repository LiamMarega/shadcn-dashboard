"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./actions/cell-action";
import { Checkbox } from "@/components/ui/checkbox";
import { MsgAction } from "./actions/msg-action";
import { WebAction } from "./actions/website-action";
import { Client } from "@/lib/stores/store-clients";
import { User } from "@/constants/data";

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "NAME",
  },
  {
    accessorKey: "role",
    header: "COMPANY",
  },
  {
    accessorKey: "status",
    header: "STATUS",
  },

  /*   {
    header: "WEBSITE",
    id: "website",
    cell: ({ row }) => <WebAction data={row.original} />,
  },
  {
    header: "SEND",
    id: "send-msg",
    cell: ({ row }) => <MsgAction data={row.original} />,
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  }, */
];
