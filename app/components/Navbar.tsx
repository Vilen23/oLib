"use client";
import React from "react";
import { Lora, Nunito } from "next/font/google";
import { signIn, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function Navbar() {
  const session = useSession();
  const pathname = usePathname();

  if (pathname === "/auth/signin") {
    return null;
  }

  return (
    <div className="h-[10vh] flex justify-around items-center border-b-2 border-espresso">
      <div
        style={{ fontFamily: lora.style.fontFamily }}
        className="text-5xl font-bold cursor-pointer hover:opacity-90"
      >
        oLib
      </div>
      <nav style={{ fontFamily: nunito.style.fontFamily }} className="w-[30vw]">
        <ul className="flex justify-around items-center space-x-4 text-xl">
          <li className="cursor-pointer hover:opacity-95 relative group">
            Listed Books
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-espresso opacity-95 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer hover:opacity-95 relative group">
            Donate
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-espresso opacity-95 transition-all duration-300 group-hover:w-full"></span>
          </li>
          {session?.data?.user ? (
            <li>Profile</li>
          ) : (
            <>
              <li
                className="cursor-pointer hover:opacity-95 relative group"
                onClick={() => signIn()}
              >
                Login
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-espresso opacity-95 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li
                className="cursor-pointer hover:opacity-95 relative group"
                onClick={() => signIn()}
              >
                Sign up
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-espresso opacity-95 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
