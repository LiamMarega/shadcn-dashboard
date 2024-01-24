"use client";
import React from "react";
import { Icons } from "../icons";

function CustomNavbar() {
  const [open, setOpen] = React.useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  function renderMenuItems() {
    const menuItems = [
      { name: "English (US)", code: "en-US" },
      { name: "Español (ES)", code: "es-ES" },
      { name: "Français (FR)", code: "fr-FR" },
      { name: "日本語 (JP)", code: "ja-JP" },
      { name: "中文 (CN)", code: "zh-CN" },
    ];

    return menuItems.map((item) => (
      <li key={item.code} onClick={toggleMenu}>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          {item.name}
        </a>
      </li>
    ));
  }

  // This is the JSX syntax to return your component
  return (
    <nav className="z-20 fixed bg-white bg-opacity-95 border-gray-200 dark:bg-gray-900">
      <div className="w-screen flex items-center justify-between px-10 p-4">
        <Icons.logo className="h-8" />

        <div className="relative flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            onClick={toggleMenu}
            className="relative inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            English (US)
          </button>
          {/* Dropdown */}
          <div
            className={`z-50 ${
              open ? "absolute" : "hidden"
            } my-4 top-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700`}
            id="language-dropdown-menu"
          >
            <ul className="py-10 font-medium" role="none">
              {renderMenuItems()}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default CustomNavbar;
