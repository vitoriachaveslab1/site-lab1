"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getImagePrefix } from "@/utils/utils";

const Work = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  const bottomAnimation = {
    initial: { y: "100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  const services = [
    {
      icon: "/images/icons/icon-consulting.svg",
      text: "Propósito",
      caption: "Ajudar empresas a fazerem melhor o que já fazem bem, com SAP.",
    },
    {
      icon: "/images/icons/icon-blockchain.svg",
      text: "Visão",
      caption: "Ser referência nacional em consultoria SAP Business One.",
    },
    
  ];
  return (
    <section className="md:pt-28" id="work">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div ref={ref} className="grid grid-cols-12 items-center">
          <motion.div
            {...bottomAnimation}
            className="lg:col-span-7 col-span-12"
          >
            <p className="sm:text-28 text-18 text-white">
              Sobre <span className="text-primary">Nós</span>
            </p>
            <h2 className="sm:text-10 text-10 text-white lg:w-full md:w-30% font-medium">
              A <span className="text-primary"> LAB1 Consultoria</span> é parceira oficial da <span className="text-primary">SAP Brasil desde 2008</span>, especializada na implementação do <span className="text-primary"> SAP Business One</span> e no redesenho de processos de negócios. Com atendimento de excelência, nossa missão é ajudar empresas a integrarem tecnologia e gestão para alcançar mais eficiência, controle e crescimento.
Nossa visão é ser referência em consultoria SAP no Brasil, entregando soluções inovadoras que façam diferença real para nossos clientes.
            </h2>
            <div className="grid md:grid-cols-2 gap-7 mt-11">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-5">
                  <div className="px-5 py-5 bg-light_grey bg-opacity-30 rounded-full">
                    <Image
                      src= {`${getImagePrefix()}${service.icon}`}
                      alt={`${service.text} icon`}
                      width={40}
                      height={40}
                    />
                  </div>
      <div className="flex flex-col">
        <p className="text-24 text-muted">{service.text}</p>
        {service.caption && (
          <p className="text-muted text-sm mt-1">{service.caption}</p>
        )}
      </div>
    </div>
  ))}
</div>
          </motion.div>
          <motion.div {...TopAnimation} className="lg:col-span-5 col-span-12">
            <div className="2xl:-mr-40 mt-9 flex justify-center">
              <Image
                src= {`${getImagePrefix()}images/work/img-work-with-us.png`}
                alt="image"
                width={600}
                height={425}
                className="lg:w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
