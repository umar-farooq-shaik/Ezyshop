"use client";
import Image from "next/image";
import Link from "next/link";
import { MainNav } from "./main-nav";
import { useTheme } from "@/context/themeProvider";
import UnderConstructionAlert from "../modals/underConstruction";

const Navbar = () => {
  
  const { theme } = useTheme() || { theme: "light" }; // Get the current theme and toggle function

  return (
    <div
      className={`border-b dark:border-Green w-full border-gray-900 ${
        theme === "dark" ? "bg-DarkGray" : "bg-white"
      } sticky top-0 z-50`}  // <-- Added `sticky`, `top-0`, and `z-50` for sticky effect
    >
      <div
        className={`relative px-4 sm:px-6 lg:px-8 flex h-25 justify-between items-center ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        <div className="flex items-center">
          <Link href="/" className="ml-4 flex lg:ml:0 gap-x-2">
            <Image
              src={"/ezyshop.png"}
              width={80}
              height={80}
              alt="ezyshop logo"
            />
          </Link>
          <Link href="/" className="ml-4 flex lg:ml:0 gap-x-2">
            <p className="font-extrabold text-5xl font-nunito bg-customTeal dark:bg-gradient-to-r from-Green to-Yellow inline-block text-transparent bg-clip-text">
              Ezys
            </p>
          </Link>
        </div>
        {/* all the navigation links */}
        <MainNav theme={theme} />

        <UnderConstructionAlert theme={theme} />
        
      </div>
    </div>
  );
};

export default Navbar;
