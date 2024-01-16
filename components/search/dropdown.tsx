"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

import { Button } from "@nextui-org/button";

export default function DropMenu() {
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(["Argentina, Entre Ríos"]),
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize px-10 flex ">
          🗺️ {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="shadow"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
      >
        <DropdownItem key="text"></DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
