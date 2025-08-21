"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CardSlider from "./slider";
import { getImagePrefix } from "@/utils/utils";

const Hero = () => {
  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="relative md:pt-40 md:pb-28 py-20 overflow-hidden z-1"
      id="main-banner"
    >
      <div className="absolute top-0 left-0 w-full h-[600px] md:h-[400px] lg:h-[1000px] -z-10">
        <Image
          src={`${getImagePrefix()}images/hero/Capa_Home.png`}
          alt="Capa Hero Background"
          fill
          className="object-cover object-top"
        />
      </div>

      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid grid-cols-12">
          <motion.div {...leftAnimation} className="lg:col-span-5 col-span-12">
            <div className="flex gap-6 items-center lg:justify-start justify-center mb-5 mt-24"></div>
            <h1 className="font-medium lg:text-76 md:text-70 text-54 lg:text-start text-center text-white mb-10">
              Faça <span className="text-primary">melhor</span> do que nunca com{" "}
              <span className="text-primary">SAP</span>!
            </h1>
            <div className="flex items-center md:justify-start justify-center gap-8">
              <Link
                href="#contato"
                className="bg-primary border border-primary rounded-lg text-21 font-medium hover:bg-transparent hover:text-primary text-darkmode py-2 px-7 z-50"
              >
                Saiba Mais
              </Link>
            </div>
          </motion.div>

          <motion.div {...rightAnimation} className="col-span-7 lg:block hidden">
            <div className="ml-20 -mr-64">
              <Image
                src="/images/hero/banner-image.png"
                alt="Banner"
                width={1000}
                height={2}
              />
            </div>
          </motion.div>
        </div>

        <CardSlider />
      </div>

      <div className="absolute w-50 h-50 bg-gradient-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1"></div>
    </section>
  );
};

export default Hero;
