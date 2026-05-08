"use client";
import Logo from "@/app/icons/logo";
import MenuIcon from "@/app/icons/menu";
import { motion } from "motion/react";
import { useState } from "react";

export default function NavBar() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  return (
    <div className="text-white items-center flex justify-between">
      <div
        className="relative flex items-center bg-black/25 h-fit rounded-full  cursor-pointer py-1"
        onMouseLeave={() => {
          setPosition({
            left: 0,
            width: 0,
            opacity: 0,
          });
        }}
      >
        <motion.span
          initial={{
            opacity: 0,
            translateY: 10,
          }}
          animate={{
            opacity: 1,
            translateY: -1,
          }}
          transition={{
            duration: 0.3,
          }}
          onMouseEnter={(e) => {
            const width = e.currentTarget.getBoundingClientRect().width;
            setPosition({
              opacity: 1,
              width: width - 4,
              left: e.currentTarget.offsetLeft + 4,
            });
          }}
          className="relative z-10 px-5 py-2"
        >
          Service
        </motion.span>
        <motion.span
          initial={{
            opacity: 0,
            translateY: 10,
          }}
          animate={{
            opacity: 1,
            translateY: -1,
          }}
          transition={{
            duration: 0.3,
          }}
          onMouseEnter={(e) => {
            const width = e.currentTarget.getBoundingClientRect().width;
            setPosition({
              opacity: 1,
              width: width - 4,
              left: e.currentTarget.offsetLeft + 4,
            });
          }}
          className="relative z-10 px-5 py-2"
        >
          Members benefits
        </motion.span>
        <motion.span
          initial={{
            opacity: 0,
            translateY: 10,
          }}
          animate={{
            opacity: 1,
            translateY: -1,
          }}
          transition={{
            duration: 0.3,
          }}
          onMouseEnter={(e) => {
            const width = e.currentTarget.getBoundingClientRect().width;
            setPosition({
              opacity: 1,
              width: width - 4,
              left: e.currentTarget.offsetLeft + 4,
            });
          }}
          className="relative z-10 px-5 py-2"
        >
          Products
        </motion.span>
        <motion.span
          animate={position}
          className="absolute z-0 rounded-full max-h-full min-h-10 my-0.5 bg-black/45"
        />
      </div>
      <div className="text-3xl -translate-x-[100%] font-semibold flex gap-2 h-fit items-center">
        <motion.div
          initial={{
            translateX: 20,
          }}
          animate={{
            translateX: -1,
          }}
        >
          <Logo />
        </motion.div>
        <motion.div
          initial={{
            translateX: -20,
            opacity: 0,
          }}
          animate={{
            translateX: 1,
            opacity: 1,
          }}
        >
          Solv.
        </motion.div>
      </div>
      <div className="flex gap-2 items-center">
        <motion.button
          initial={{
            translateX: 20,
            opacity: 0,
          }}
          animate={{
            translateX: -1,
            opacity: 1,
          }}
          className="mx-2 py-2 cursor-pointer"
        >
          Login
        </motion.button>
        <motion.button
          initial={{
            translateX: -20,
          }}
          animate={{
            translateX: 1,
          }}
          className="bg-white text-black px-4 py-2.5 rounded-full cursor-pointer"
        >
          Sign Up
        </motion.button>
        <motion.div
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
        >
          <MenuIcon />
        </motion.div>
      </div>
    </div>
  );
}
