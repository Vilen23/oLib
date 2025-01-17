"use client";
import Modal from "@/app/components/Modal";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Lora, Nunito } from "next/font/google";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export default function page() {
  const [isModalOpen, setIsModalOpen] = React.useState(true);
  const router = useRouter();
  const closeModal = () => {
    setIsModalOpen(false);
    router.push("/");
  };
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal} width="80vw" height="90vh">
      <div className="flex h-full">
        <div className="w-1/2 relative -ml-4 -mt-4 -mb-4">
          <Image
            src="/cozy_library_left_half.png"
            layout="fill"
            objectFit="cover"
            alt="cozy"
          />
        </div>
        <div
          className="w-1/2 flex justify-center items-center"
          style={{ fontFamily: nunito.style.fontFamily }}
        >
          <div className="flex flex-col justify-center items-center gap-5 w-[80%] ">
            <h1
              className="text-espresso font-bold text-3xl"
              style={{ fontFamily: lora.style.fontFamily }}
            >
              Login
            </h1>
            <div className="flex flex-col w-[50%]">
              <label htmlFor="Email" className="font-semibold">
                Email
              </label>
              <input
                type="text"
                className="bg-cozybg border-2 border-espresso/20 text-espresso focus:outline-none focus:ring-0 p-1 rounded-lg"
                placeholder="abcd@gmail.com"
                id="Email"
              />
            </div>
            <div className="flex flex-col w-[50%]">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <input
                type="password"
                className="bg-cozybg border-2 border-espresso/20 text-espresso focus:outline-none focus:ring-0 p-1 rounded-lg"
                placeholder="password"
              />
            </div>
            <div className="flex justify-end w-[50%]">
              <a href="#" className="text-espresso text-sm cursor-pointer hover:underline">
                Forgot Password?
              </a>
            </div>
            <button className="bg-terracotta text-cream px-4 py-2 rounded-md w-[50%]">
              Login
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
