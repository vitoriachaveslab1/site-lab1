"use client";
import Image from "next/image";
import { timelineData } from "@/app/api/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getImagePrefix } from "@/utils/utils";

const TimeLine = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };
  return (
    <section className="md:pt-40 pt-9" id="development">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md lg:px-16 px-4">
        <div className="text-center">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
                        <h2 className="text-white sm:text-40 text-30 font-medium lg:w-80% mx-auto mb-2">
               Serviços da <span className="text-primary">LAB1</span>
            </h2>
            <p className="text-muted sm:text-25 text-18 mb-9">
              Mais do que tecnologia: experiência, parceria e resultados
            </p>

          </motion.div>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="md:block hidden relative">
              <div>
                <Image
                  src= {`${getImagePrefix()}images/timeline/img-timeline.png`} 
                  alt="image"
                  width={1220}
                  height={1000}
                  className="w-80% mx-auto"
                />
              </div>
              <div className="absolute top-[100px] right-100 w-full max-w-sm flex items-center gap-6">
                <div className="text-right">
                  <h5 className="text-muted text-28 mb-3">Suporte Especializado</h5>
                  <p className="text-18 text-muted text-opacity-60">
                  Garantimos o funcionamento da solução com suporte técnico e melhorias constantes.
                  </p>
                </div>
                <div className="bg-light_grey bg-opacity-45 backdrop-blur-sm px-6 py-1 h-fit rounded-full">
                  <Image
                    src= {`${getImagePrefix()}images/timeline/icon-support.svg`}
                    alt="Planning"
                    width={44}
                    height={44}
                    className="w-16 h-16"
                  />
                </div>
              </div>
              <div className="absolute top-[100px] right-0 w-72 flex items-center gap-6">
                <div className="bg-light_grey bg-opacity-45 backdrop-blur-sm px-6 py-1 h-fit rounded-full">
                  <Image
                    src= {`${getImagePrefix()}images/timeline/icon-refinement.svg`}
                    alt="Refinement"
                    width={44}
                    height={44}
                    className="w-16 h-16"
                  />
                </div>
                <div className="text-left">
                  <h5 className="text-muted text-28 mb-3">Consultoria Power BI</h5>
                  <p className="text-18 text-muted text-opacity-60">
                    Dashboards e análises inteligentes para decisões mais rápidas.
                  </p>
                </div>
              </div>
              <div className="absolute top-[280px] left-0 w-72 flex items-center gap-6">
                <div className="text-right">
                  <h5 className="text-muted text-28 mb-3">Fábrica de Add‑Ons</h5>
                  <p className="text-18 text-muted text-opacity-60">
                    Desenvolvimento de funcionalidades específicas para o seu negócio.
                  </p>
                </div>
                <div className="bg-light_grey bg-opacity-45 backdrop-blur-sm px-6 py-1 h-fit rounded-full">
                  <Image
                    src= {`${getImagePrefix()}images/timeline/icon-prototype.svg`}
                    alt="Prototype"
                    width={44}
                    height={44}
                    className="w-16 h-16"
                  />
                </div>
              </div>
              <div className="absolute top-[280px] right-0 w-full max-w-sm flex items-center gap-6">
                <div className="bg-light_grey bg-opacity-45 backdrop-blur-sm px-6 py-6 h-fit rounded-full">
                  <Image
                     src= {`${getImagePrefix()}images/timeline/icon-planning.svg`}
                    alt="Scale and support"
                    width={44}
                    height={44}
                    className="w-13 h-13"
                  />
                </div>
                <div className="text-left">
                  <h5 className="text-muted text-nowrap text-28 mb-3">
                    Consultoria SAP B1
                  </h5>
                  <p className="text-18 text-muted text-opacity-60">
                    Implementação completa e otimizada do sistema.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 md:hidden">
              {timelineData.map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="bg-light_grey bg-opacity-45 backdrop-blur-sm px-6 py-1 h-fit rounded-full">
                    <Image
                      src={`${getImagePrefix()}${item.icon}`}
                      alt={item.title}
                    width={44}
                    height={44}
                    className="w-16 h-16"
                    />
                  </div>
                  <div className="text-start">
                    <h4 className="text-28 text-muted mb-2">{item.title}</h4>
                    <p className="text-muted text-opacity-60 text-18">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
